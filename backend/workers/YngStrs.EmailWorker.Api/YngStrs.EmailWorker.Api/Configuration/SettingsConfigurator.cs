using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using YngStrs.EmailWorker.Api.Settings;

namespace YngStrs.EmailWorker.Api.Configuration
{
    internal static class SettingsConfigurator
    {
        public static IServiceCollection AddSettings(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<GetEmailConfig>(configuration.GetSection("RabbitMQService:GetEmailConfig"));

            return services;
        }
    }
}