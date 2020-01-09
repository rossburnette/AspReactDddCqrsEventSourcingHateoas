using System.Collections.Generic;
using System.Threading.Tasks;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Hosting;
using YngStrs.HealthCheckUI.Configuration;
using YngStrs.HealthCheckUI.HealthChecks;
using YngStrs.HealthCheckUI.Helpers;
using YngStrs.HealthCheckUI.Middlewares;

namespace YngStrs.HealthCheckUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var checksBuilder = services.AddHealthChecks();

            checksBuilder.AddCheck("HealthCheck UI", () => HealthCheckResult.Healthy());

            var baseApiUrl = Configuration.GetValue<string>("api:BaseAddress");
            var buildVersionPath = Configuration.GetValue<string>("BuildVersionPath");
            var buildVersionCheckTimeout = Configuration.GetValue<int>("BuildVersionCheckTimeout");

            var customChecks = Configuration.GetSection("CustomChecks").Get<List<CustomCheck>>();

            if (customChecks != null && customChecks.Count > 0)
            {
                var customCheckBaseUrls = Configuration.GetSection("CustomChecksBaseUrls").Get<Dictionary<string, string>>();
                var customChecksOrder = Configuration.GetSection("CustomChecksOrder").Get<List<string>>();

                var healthChecks = CustomCheckHelper.GetHealthChecks(customChecks, customCheckBaseUrls, customChecksOrder, buildVersionCheckTimeout);
                foreach (var (name, check) in healthChecks)
                {
                    checksBuilder.AddCheck(name, check);
                }
            }
            else
            {
                var dfServices = new List<YngStrsService>();
                dfServices.AddRange(Configuration.GetSection("yngStrsServices").Get<List<YngStrsService>>());
                dfServices.AddRange(Configuration.GetSection("yngStrsWorkers").Get<List<YngStrsService>>());

                foreach (var dfService in dfServices)
                {
                    checksBuilder.AddCheck(dfService.Name, new BuildVersionHealthCheck(
                        baseApiUrl,
                        dfService,
                        buildVersionPath,
                        buildVersionCheckTimeout));
                }
            }

            services.AddHealthChecksUI();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<BasicAuthenticationMiddleware>();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapGet("/", async context =>
                    {
                        context.Response.Redirect("/ui");

                        await Task.CompletedTask;
                    });

                    endpoints.MapHealthChecks("/yngstrs", new HealthCheckOptions
                    {
                        Predicate = _ => true,
                        ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                    });

                    endpoints.MapHealthChecksUI(config =>
                    {
                        config.UIPath = "/ui";
                        config.AddCustomStylesheet("HealthCheckUi/style.css");
                        config.ApiPath = "/ui/api";
                        config.ResourcesPath = "/ui/resources";
                        config.WebhookPath = "/ui/webhook";
                    });
                });
        }
    }
}
