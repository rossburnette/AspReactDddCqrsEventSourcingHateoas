using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using YngStrs.Identity.Api.AuthContext.Services.Business;
using YngStrs.Identity.Api.AuthContext.Services.Core;
using YngStrs.Identity.Api.Domain.Entities;
using YngStrs.Identity.Api.Persistence.EntityFramework;

namespace YngStrs.Identity.Api.Configuration
{
    internal static class IdentityConfigurator
    {
        internal static IServiceCollection AddDbContext(this IServiceCollection services, string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new ArgumentNullException(nameof(connectionString));
            }

            services.AddDbContext<IdentityContext>(
                opts => opts.UseNpgsql(connectionString));

            return services;
        }

        internal static IServiceCollection AddIdentity(this IServiceCollection services)
        {
            services
                .AddIdentity<User, IdentityRole<Guid>>(options =>
                {
                    options.ConfigurePasswordSettings();
                    options.ConfigureLockoutSettings();
                    options.ConfigureUserSettings();
                })
                .AddEntityFrameworkStores<IdentityContext>()
                .AddDefaultTokenProviders();

            return services;
        }

        internal static IServiceCollection AddUserClaimsFactory(this IServiceCollection services)
        {
            services.AddTransient<IUserClaimsFactory, UserClaimsFactory>();

            return services;
        }

        internal static IServiceCollection AddIdentityCookies(this IServiceCollection services)
        {
            services.ConfigureApplicationCookie(options =>
            {
                options.AccessDeniedPath = "/Identity/Account/AccessDenied";
                options.Cookie.Name = "YngStrs.IdentityServer4";
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromDays(30);
                options.LoginPath = "/User/Login";
                options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
                options.SlidingExpiration = true;
            });

            return services;
        }

        internal static IServiceCollection AddForwardedHeadersOptions(this IServiceCollection services)
        {
            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
                options.RequireHeaderSymmetry = false;
                options.KnownNetworks.Clear();
                options.KnownProxies.Clear();
            });

            return services;
        }

        internal static IServiceCollection AddIdentityServer(this IServiceCollection services, IConfigurationSection jwtConfiguration, string connectionString)
        {
            var signingKey = new SymmetricSecurityKey(
                Encoding.Default.GetBytes(jwtConfiguration["Secret"]));

            services.AddIdentityServer(options =>
                {
                    options.Events.RaiseSuccessEvents = true;
                    options.Events.RaiseErrorEvents = true;
                    options.Events.RaiseFailureEvents = true;
                    options.Events.RaiseInformationEvents = true;
                    options.IssuerUri = jwtConfiguration["IssuerUri"];
                    options.PublicOrigin = jwtConfiguration["IssuerUri"];
                })
                .AddAspNetIdentity<User>()
                .AddProfileService<ProfileService>()
                .AddSigningCredential(new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256))
                .AddConfigurationStore(options => options.ConfigureDbContext = ConfigurePostgresStore(connectionString))
                .AddOperationalStore(options => options.ConfigureDbContext = ConfigurePostgresStore(connectionString));

            return services;
        }

        private static IdentityOptions ConfigurePasswordSettings(this IdentityOptions options)
        {
            options.Password.RequireDigit = true;
            options.Password.RequireLowercase = false;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequireUppercase = false;
            options.Password.RequiredLength = 7;
            options.Password.RequiredUniqueChars = 0;

            return options;
        }

        private static IdentityOptions ConfigureLockoutSettings(this IdentityOptions options)
        {
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);
            options.Lockout.MaxFailedAccessAttempts = 5;
            options.Lockout.AllowedForNewUsers = true;

            return options;
        }

        private static IdentityOptions ConfigureUserSettings(this IdentityOptions options)
        {
            options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!#$%&'’*+-/=?^_`{|}~@";
            options.User.RequireUniqueEmail = true;

            return options;
        }

        private static Action<DbContextOptionsBuilder> ConfigurePostgresStore(string connectionString)
        {
            return builder => builder.UseNpgsql(connectionString, optionsBuilder =>
                {
                    optionsBuilder
                        .MigrationsAssembly(typeof(IdentityContext).Assembly.GetName().Name);

                    optionsBuilder
                        .EnableRetryOnFailure(
                            maxRetryCount: 15,
                            maxRetryDelay: TimeSpan.FromSeconds(30),
                            errorCodesToAdd: null);
                });
        }
    }
}