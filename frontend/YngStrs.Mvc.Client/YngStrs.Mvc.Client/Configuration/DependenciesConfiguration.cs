using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using YngStrs.Mvc.Client.DelegatingHandlers;
using YngStrs.Mvc.Client.Services.Business;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Configuration
{
    internal static class DependenciesConfiguration
    {
        internal static IServiceCollection AddHttpClients(this IServiceCollection serviceCollection)
        {
            serviceCollection
                .AddHttpClient("PersonalityTestClient", client =>
                {
                     client.BaseAddress = new Uri("https://localhost:5101");
                     client.Timeout = new TimeSpan(0, 0, 30);
                     client.DefaultRequestHeaders.Clear();

                })
                .AddHttpMessageHandler(handler => new TimeOutDelegatingHandler(TimeSpan.FromSeconds(20)))
                .AddHttpMessageHandler(handler => new RetryPolicyDelegatingHandler(2))
                .ConfigurePrimaryHttpMessageHandler(handler => new HttpClientHandler
                {
                     AutomaticDecompression = System.Net.DecompressionMethods.GZip

                });

            return serviceCollection;
        }

        internal static IServiceCollection AddServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IPersonalityTestsService, PersonalityTestsService>();

            return serviceCollection;
        }
    }
}