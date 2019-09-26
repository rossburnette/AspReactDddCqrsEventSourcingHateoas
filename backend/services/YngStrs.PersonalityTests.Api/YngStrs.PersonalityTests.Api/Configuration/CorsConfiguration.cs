using Microsoft.AspNetCore.Builder;

namespace YngStrs.PersonalityTests.Api.Configuration
{
    internal static class CorsConfiguration
    {
        internal static IApplicationBuilder UseCors(this IApplicationBuilder applicationBuilder)
        {
            return applicationBuilder
                .UseCors(builder => builder
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .WithOrigins("http://localhost:3000", "https://*.yngstrs.net")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
        }
    }
}