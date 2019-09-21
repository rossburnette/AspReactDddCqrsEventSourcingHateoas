using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using YngStrs.Common.Api.Loggers;

namespace YngStrs.Common.Api.Filters
{
    /// <inheritdoc />
    /// <summary>
    ///  Global asynchronous environment-dependent exception handler.
    /// </summary>
    /// <remarks>
    /// Request and response metadata is persisted.
    /// </remarks>
    public class AsyncExceptionFilter : IAsyncExceptionFilter
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IAsyncExceptionLogger _asyncExceptionLogger;

        public AsyncExceptionFilter(IHostingEnvironment hostingEnvironment, IAsyncExceptionLogger asyncExceptionLogger)
        {
            _hostingEnvironment = hostingEnvironment;
            _asyncExceptionLogger = asyncExceptionLogger ??
                                    throw new ArgumentNullException(typeof(IAsyncExceptionLogger).FullName);
            ;
        }

        public async Task OnExceptionAsync(ExceptionContext context)
        {
            await _asyncExceptionLogger.LogCriticalAsync(
                context.HttpContext, context.Exception, CancellationToken.None);

            const int errorStatus = (int)HttpStatusCode.InternalServerError;

            if (_hostingEnvironment.IsDevelopment())
            {
                context.HttpContext.Response.StatusCode = errorStatus;
                context.Result = new JsonResult(context.Exception);
            }
            else
            {
                if (context.Exception.GetType() == typeof(OperationCanceledException)
                    || context.Exception.GetType() == typeof(TaskCanceledException))
                {
                    context.HttpContext.Response.StatusCode = (int)HttpStatusCode.RequestTimeout;
                    context.Result = new ObjectResult(
                        "Operation took too much time and it was cancelled!");
                }
                else
                {
                    context.HttpContext.Response.StatusCode = errorStatus;
                    context.Result = new JsonResult(
                        Error.Critical("An unexpected internal server error has occurred.");
                }
            }
        }
    }
}