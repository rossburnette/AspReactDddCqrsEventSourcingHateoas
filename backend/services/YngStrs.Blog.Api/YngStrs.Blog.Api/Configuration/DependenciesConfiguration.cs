using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using YngStrs.Blog.Api.Persistence;

namespace YngStrs.Blog.Api.Configuration
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

            services.AddDbContext<BlogDbContext>(opts =>
                opts.UseNpgsql(connectionString));

            return services;
        }
    }
}
