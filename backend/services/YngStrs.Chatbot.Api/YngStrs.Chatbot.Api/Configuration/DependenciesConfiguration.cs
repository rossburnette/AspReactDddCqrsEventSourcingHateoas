using Marten;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using RiskFirst.Hateoas;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using YngStrs.Chatbot.Api.Domain.Entities;
using YngStrs.Chatbot.Api.Domain.Events;
using YngStrs.Chatbot.Api.Domain.Repositories;
using YngStrs.Chatbot.Api.Persistence.Repositories;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Business;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Common.Hateoas.Business;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.Chatbot.Api.Configuration
{
    /// <summary>
    /// Helper class for <see cref="Startup"/>.
    /// </summary>
    internal static class DependenciesConfiguration
    {
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

                options.Events.InlineProjections.AggregateStreamsWith<UserAnswers>();
                options.Events.InlineProjections.AggregateStreamsWith<UserPersonalData>();

                var events = typeof(UserSubmittedChatbotAnswers)
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
                .GetAssembly(typeof(IUserAnswersRepository))
                .GetTypes()
                .Where(t => t.Name.EndsWith("Repository") &&
                            t.IsInterface)
                .ToArray();

            var repositoryImplementationTypes = Assembly
                .GetAssembly(typeof(UserAnswersRepository))
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
                var documentationPath = Path.Combine(AppContext.BaseDirectory, "YngStrs.Chatbot.Api.Documentation.xml");

                if (!File.Exists(documentationPath))
                {
                    return;
                }

                setup.IncludeXmlComments(documentationPath);

                setup.SwaggerDoc("v1", new OpenApiInfo { Title = "Chatbot API", Version = "v1" });
            });

            return services;
        }
    }
}