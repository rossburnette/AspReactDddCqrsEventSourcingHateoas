using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Identity.Api.Configuration;

namespace YngStrs.Identity.Api
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
            services.AddSwagger();

            services.AddProjectIdentity(Configuration);

            services.AddCqrs();

            services.AddDbConnectors();

            services.AddAutoMapper(typeof(Startup));

            services.AddMediatR(typeof(Startup));

            services.AddValidatorsFromAssembly(typeof(Startup).Assembly);

            services.AddRepositories();

            services.AddEventSourcing(Configuration);

            services.AddHateoas();

            services.AddControllers();

            ConnectionManagerBase
                .SetConnectionString(Configuration.GetConnectionString("DefaultConnection"));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger("Identity");
        }
    }
}
