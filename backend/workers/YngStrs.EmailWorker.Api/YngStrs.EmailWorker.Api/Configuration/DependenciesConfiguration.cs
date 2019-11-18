using EasyNetQ;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using YngStrs.EmailWorker.Api.Services.Business;
using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Configuration
{
    internal static class DependenciesConfiguration
    {
        internal static IServiceCollection AddApplicationServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<ISendEmailService, SendEmailService>();

            return serviceCollection;
        }

        internal static IServiceCollection AddEasyNetQAdvancedBus(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var rmqHost = configuration.GetSection("RabbitMQService:Host").Value;
            var rmqUsername = configuration.GetSection("RabbitMQService:Username").Value;
            var rmqPassword = configuration.GetSection("RabbitMQService:Password").Value;

            var connectionString = $"host={rmqHost};virtualHost=/;username={rmqUsername};password={rmqPassword}";

            services.AddTransient(_ => RabbitHutch.CreateBus(connectionString).Advanced);

            return services;
        }

        internal static IServiceCollection AddHostedServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IHostedService, RabbitMqService>();
            serviceCollection.AddSingleton<IRequestProcessorFactory, RequestProcessorFactory>();

            return serviceCollection;
        }
    }
}