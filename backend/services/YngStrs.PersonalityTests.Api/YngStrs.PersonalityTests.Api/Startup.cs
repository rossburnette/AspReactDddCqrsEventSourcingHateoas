using AutoMapper;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Api.Filters;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Commands;
using YngStrs.PersonalityTests.Api.Configuration;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;

namespace YngStrs.PersonalityTests.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();

            services.AddResponseCaching();

            services.AddDbContext(Configuration.GetConnectionString("DefaultConnection"));

            services.AddDbConnectors();

            services.AddTransient<DatabaseSeeder>();

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
                    fv.RegisterValidatorsFromAssemblyContaining<BeginPersonalityTestValidator>();
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            ConnectionManagerBase
                .SetConnectionString(Configuration.GetConnectionString("DefaultConnection"));
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        public void Configure(
            IApplicationBuilder app,
            IHostingEnvironment env,
            ILoggerFactory loggerFactory,
            PersonalityTestDbContext dbContext,
            DatabaseSeeder seeder)
        {
            dbContext.Database.EnsureCreated();
            seeder.SeedDatabase();

            DatabaseConfiguration.EnsureEventStoreIsCreated(Configuration);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSwagger("Personality Test");

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
