using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Marten;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using RiskFirst.Hateoas;
using Swashbuckle.AspNetCore.Swagger;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Business;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Common.Hateoas.Business;
using YngStrs.Common.Hateoas.Core;
using YngStrs.Identity.Api.Domain.Repositories;
using YngStrs.Identity.Api.Persistence.Repositories;
using YngStrs.Identity.Api.Settings;

namespace YngStrs.Identity.Api.Configuration
{
    internal static class DependenciesConfigurator
    {
        internal static IServiceCollection AddProjectIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            var jwtConfiguration = configuration.GetSection(nameof(JwtConfiguration));

            services.AddDbContext(connectionString);

            services.AddIdentity();

            services.AddUserClaimsFactory();

            services.AddIdentityCookies();

            services.AddForwardedHeadersOptions();

            var keyParameters = configuration.RegistrateKeyParameters();

            services.AddIdentityServer(jwtConfiguration, connectionString, keyParameters.CreateSigningCredentials());

            return services;
        }

        internal static IServiceCollection AddCqrs(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton(typeof(ICommandValidator<>), typeof(CommandValidator<>));
            return serviceCollection;
        }

        internal static IServiceCollection AddDbConnectors(this IServiceCollection serviceCollection)
        {
            return serviceCollection.AddScoped<IQueryDbConnector, QueryDbConnector>();
        }

        internal static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            var repositoryTypes = Assembly
                .GetAssembly(typeof(IUserRepository))
                .GetTypes()
                .Where(t => t.Name.EndsWith("Repository") &&
                            t.IsInterface)
                .ToArray();

            var repositoryImplementationTypes = Assembly
                .GetAssembly(typeof(UserRepository))
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
            });

            services.AddSingleton<IDocumentStore>(documentStore);

            services.AddScoped(sp => sp.GetService<IDocumentStore>().OpenSession());

            services.AddScoped<IEventBus, EventBus>();

            return services;
        }

        internal static IServiceCollection AddHateoas(this IServiceCollection services)
        {
            services.AddTransient<IResourceMapper, ResourceMapper>();

            services.AddLinks(config =>
            {
                var policies = Assembly
                    .GetAssembly(typeof(DependenciesConfigurator))
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

        internal static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(setup =>
            {
                var documentationPath = Path.Combine(AppContext.BaseDirectory, "YngStrs.Identity.Api.Documentation.xml");

                if (!File.Exists(documentationPath))
                {
                    return;
                }

                setup.IncludeXmlComments(documentationPath);

                setup.SwaggerDoc("v1", new OpenApiInfo { Title = "Identity API", Version = "v1" });
            });

            return services;
        }
    }
}