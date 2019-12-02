using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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

       
    }
}