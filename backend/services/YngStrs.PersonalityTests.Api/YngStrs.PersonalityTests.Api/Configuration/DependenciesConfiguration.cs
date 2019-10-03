using Marten;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RiskFirst.Hateoas;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Business;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Common.Hateoas.Business;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Domain.Repositories;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;
using YngStrs.PersonalityTests.Api.Persistence.Repositories;

namespace YngStrs.PersonalityTests.Api.Configuration
{
    internal static class DependenciesConfiguration
    {
        internal static IServiceCollection AddDbContext(
            this IServiceCollection services,
            string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new ArgumentNullException(nameof(connectionString));
            }

            services.AddDbContext<PersonalityTestDbContext>(opts =>
                opts.UseNpgsql(connectionString));

            return services;
        }

        internal static IServiceCollection AddCqrs(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton(typeof(ICommandValidator<>), typeof(CommandValidator<>));
            return serviceCollection;
        }

        internal static IServiceCollection AddEventSourcing(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var documentStore = DocumentStore.For(options =>
            {
                var config = configuration.GetSection("EventStore");
                var connectionString = config.GetValue<string>("ConnectionString");
                var schemaName = config.GetValue<string>("Schema");

                options.Connection(connectionString);
                options.AutoCreateSchemaObjects = AutoCreate.All;
                options.Events.DatabaseSchemaName = schemaName;
                options.DatabaseSchemaName = schemaName;

                options.Events.InlineProjections.AggregateStreamsWith<UserQuestionAnswer>();
                options.Events.InlineProjections.AggregateStreamsWith<UserTestResult>();
                options.Events.InlineProjections.AggregateStreamsWith<UserPersonalData>();

                var events = typeof(UserAnsweredQuestion)
                    .Assembly
                    .GetTypes()
                    .Where(t => typeof(IEvent).IsAssignableFrom(t))
                    .ToList();

                options.Events.AddEventTypes(events);
            });

            services.AddSingleton<IDocumentStore>(documentStore);

            services.AddScoped(sp => sp.GetService<IDocumentStore>().OpenSession());

            services.AddScoped<IEventBus, EventBus>();

            return services;
        }

        internal static IServiceCollection AddDbConnectors(this IServiceCollection serviceCollection)
        {
            return serviceCollection.AddScoped<IQueryDbConnector, QueryDbConnector>();
        }

        internal static IServiceCollection AddHateoas(this IServiceCollection services)
        {
            services.AddTransient<IResourceMapper, ResourceMapper>();

            services.AddLinks(config =>
            {
                var policies = Assembly
                    .GetAssembly(typeof(DependenciesConfiguration))
                    .GetTypes()
                    .Where(t => !t.IsInterface &&
                                !t.IsAbstract &&
                                t.GetInterfaces().Any(i => i.Name == typeof(IPolicy<>).Name))
                    .Select(Activator.CreateInstance)
                    .Cast<dynamic>()
                    .ToArray();

                foreach (var policy in policies)
                {
                    config.AddPolicy(policy.PolicyConfiguration);
                }
            });

            return services;
        }

        internal static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            var repositoryTypes = Assembly
                .GetAssembly(typeof(IUserQuestionAnswerRepository))
                .GetTypes()
                .Where(t => t.Name.EndsWith("Repository") &&
                            t.IsInterface)
                .ToArray();

            var repositoryImplementationTypes = Assembly
                .GetAssembly(typeof(UserQuestionAnswerRepository))
                .GetTypes()
                .Where(t => t.Name.EndsWith("Repository") &&
                            t.IsClass)
                .ToDictionary(t => t.Name, t => t);

            foreach (var repositoryType in repositoryTypes)
            {
                var expectedImplementationName = repositoryType
                    .Name
                    .Substring(1);

                if (!repositoryImplementationTypes.ContainsKey(expectedImplementationName))
                {
                    throw new InvalidOperationException($"Could not find implementation for {repositoryType.FullName}.");
                }

                var implementation = repositoryImplementationTypes[expectedImplementationName];

                if (!repositoryType.IsAssignableFrom(implementation))
                {
                    throw new InvalidOperationException($"For repository {repositoryType.Name} found matching type {implementation.Name}, but it does not implement it.");
                }

                services.AddScoped(repositoryType, implementation);
            }

            return services;
        }

        internal static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(setup =>
            {
                var documentationPath = Path.Combine(AppContext.BaseDirectory, "YngStrs.PersonalityTests.Api.Documentation.xml");

                if (!File.Exists(documentationPath))
                {
                    return;
                }

                setup.IncludeXmlComments(documentationPath);

                var securityScheme = new ApiKeyScheme
                {
                    In = "header",
                    Description = "Enter 'Bearer {token}' (don't forget to add 'bearer') into the field below.",
                    Name = "Authorization",
                    Type = "apiKey"
                };

                setup.AddSecurityDefinition("Bearer", securityScheme);

                setup.SwaggerDoc("v1", new Info { Title = "PersonalityTests.Api", Version = "v1" });

                setup.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>>
                {
                    { "Bearer", Enumerable.Empty<string>() },
                });
            });

            return services;
        }
    }
}