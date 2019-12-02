using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
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
    }
}