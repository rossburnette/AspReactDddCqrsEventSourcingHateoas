using AutoMapper;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using YngStrs.Chatbot.Api.Configuration;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Api.Filters;

namespace YngStrs.Chatbot.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        /// <summary>
        /// add services to the container.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddMemoryCache();

            services.AddResponseCaching();

            services.AddDbConnectors();

            services.AddAutoMapper(typeof(Startup));

            services.AddMediatR(typeof(Startup));

            services.AddSwagger();

            services.AddCqrs();

            services.AddEventSourcing(Configuration);

            services.AddHateoas();

            services.AddRepositories();

            services
                .AddMvc(options =>
                {
                    options.Filters.Add<ExceptionFilter>();
                })
                .AddFluentValidation(fv =>
                {
                    //fv.RegisterValidatorsFromAssemblyContaining<BeginPersonalityTestValidator>();
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            ConnectionManagerBase
                .SetConnectionString(Configuration.GetConnectionString("DefaultConnection"));
        }

        /// <summary>
        /// Configures the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            DatabaseConfiguration.EnsureEventStoreIsCreated(Configuration);

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseCrossOriginResourceSharing();

            app.UseSwagger("Chat-bot");
        }
    }
}
