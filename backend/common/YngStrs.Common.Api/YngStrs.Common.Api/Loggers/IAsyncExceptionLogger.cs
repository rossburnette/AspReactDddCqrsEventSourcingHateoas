using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace YngStrs.Common.Api.Loggers
{
    public interface IAsyncExceptionLogger
    {
        Task LogCriticalAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken);
    }
}