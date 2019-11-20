using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using YngStrs.PersonalityTests.Api.Settings;

namespace YngStrs.PersonalityTests.Api.Configuration
{
    internal static class SettingsConfigurator
    {
        public static IServiceCollection AddSettings(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<SendEmailConfig>(configuration.GetSection("RabbitMQService:SendEmailConfig"));

            return services;
        }
    }
}