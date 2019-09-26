using System;
using System.Linq;
using System.Reflection;
using Marten;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RiskFirst.Hateoas;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.EventSourcing.Business;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Common.Hateoas.Business;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;

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

        public static IServiceCollection AddHateoas(this IServiceCollection services)
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
    }
}