using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using YngStrs.Identity.Api.Domain.Entities;
using YngStrs.Identity.Api.Persistence.EntityFramework;

namespace YngStrs.Identity.Api.Configuration
{
    internal static class DependenciesConfigurator
    {
        internal static IServiceCollection AddProjectIdentity(this IServiceCollection services, IConfigurationSection jwtConfiguration, string connectionString)
        {
            services.AddDbContext(connectionString);

            services.AddIdentity();

            services.AddUserClaimsFactory();

            services.AddIdentityCookies();

            services.AddForwardedHeadersOptions();

            services.AddIdentityServer(jwtConfiguration, connectionString);

            return services;
        }

       
    }
}