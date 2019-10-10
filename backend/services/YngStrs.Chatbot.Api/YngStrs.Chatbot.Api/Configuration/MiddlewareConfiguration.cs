using Microsoft.AspNetCore.Builder;

namespace YngStrs.Chatbot.Api.Configuration
{
    internal static class MiddlewareConfiguration
    {
        internal static void UseSwagger(this IApplicationBuilder app, string endpointName)
        {
            app.UseSwagger();
            app.UseSwaggerOn("swagger", endpointName);
            app.UseSwaggerOn("openapi", endpointName);
        }

        private static void UseSwaggerOn(this IApplicationBuilder app, string route, string endpointName)
        {
            app.UseSwaggerUI(setup =>
            {
                setup.RoutePrefix = route;

                setup.SwaggerEndpoint(
                    url: "/swagger/v1/swagger.json",
                    name: endpointName);
            });
        }
    }
}