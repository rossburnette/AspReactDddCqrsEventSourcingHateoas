using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace YngStrs.HealthCheckUI.Middlewares
{
    public class BasicAuthenticationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly string _username;
        private readonly string _password;

        public BasicAuthenticationMiddleware(IConfiguration configuration, RequestDelegate next)
        {
            _next = next;
            _username = configuration.GetValue<string>("AuthUsername");
            _password = configuration.GetValue<string>("AuthPassword");
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path.Value.ToLowerInvariant() == "/hc")
            {
                await _next(context);

                return;
            }

            context.Request.Headers.TryGetValue("Authorization", out var authHeaders);

            var authHeader = authHeaders.ToArray().FirstOrDefault();

            if (authHeader != null && authHeader.StartsWith("basic", StringComparison.OrdinalIgnoreCase))
            {
                var token = authHeader.Substring("Basic ".Length).Trim();
                var credentialString = Encoding.UTF8.GetString(Convert.FromBase64String(token));
                var credentials = credentialString.Split(':');
                if (credentials[0] == _username && credentials[1] == _password)
                {
                    var claims = new[]
                    {
                        new Claim("name", credentials[0]), new Claim(ClaimTypes.Role, "Admin")
                    };
                    var identity = new ClaimsIdentity(claims, "Basic");
                    context.User = new ClaimsPrincipal(identity);
                }
                else
                {
                    context.Response.StatusCode = 401;
                    context.Response.Headers["WWW-Authenticate"] = "Basic realm=\"DF Status\"";
                }
            }
            else
            {
                context.Response.StatusCode = 401;
                context.Response.Headers["WWW-Authenticate"] = "Basic realm=\"DF Status\"";
            }

            if (context.User?.Identity?.IsAuthenticated ?? false)
            {
                await _next(context);
            }
        }
    }
}