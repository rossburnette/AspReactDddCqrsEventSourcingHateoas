using Microsoft.AspNetCore.Builder;

namespace YngStrs.Chatbot.Api.Configuration
{
    internal static class CorsConfiguration
    {
        internal static IApplicationBuilder UseCrossOriginResourceSharing(this IApplicationBuilder applicationBuilder)
        {
            applicationBuilder.UseCors(builder => builder
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                .WithOrigins("http://localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            return applicationBuilder;
        }
    }
}