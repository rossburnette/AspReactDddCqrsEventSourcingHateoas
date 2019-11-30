using Microsoft.Extensions.DependencyInjection;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace YngStrs.ReportsWorker.Api.Configuration
{
    internal static class DependenciesConfigurator
    {
        internal static IServiceCollection AddExcelWorkbook(this IServiceCollection services)
        {
            services.AddSingleton<IWorkbook, XSSFWorkbook>();
            return services;
        }
    }
}
