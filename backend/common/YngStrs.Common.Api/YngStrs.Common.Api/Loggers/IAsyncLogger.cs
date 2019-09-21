using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace YngStrs.Common.Api.Loggers
{
    public interface IAsyncLogger
    {
        Task LogWarningAsync(HttpContext httpContext, string loadTime, CancellationToken cancellationToken);

        Task LogInformationAsync(HttpContext httpContext, string loadTime, CancellationToken cancellationToken);

        Task LogErrorAsync(HttpContext httpContext, string loadTime, CancellationToken cancellationToken);
    }
}