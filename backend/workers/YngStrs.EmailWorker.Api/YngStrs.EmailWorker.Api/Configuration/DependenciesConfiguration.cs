using Microsoft.Extensions.DependencyInjection;
using YngStrs.EmailWorker.Api.Services.Business;
using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Configuration
{
    internal static class DependenciesConfiguration
    {
        internal static IServiceCollection AddApplicationServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<ISendEmailService, SendEmailService>();

            return serviceCollection;
        }
    }
}