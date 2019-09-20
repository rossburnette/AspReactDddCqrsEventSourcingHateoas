using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Filters;
using YngStrs.Common.Api.Loggers;

namespace YngStrs.Common.Api.Filters
{
    /// <inheritdoc />
    /// <summary>
    ///  Global asynchronous environment-dependent exception handler.
    /// </summary>
    public class AsyncExceptionFilter : IAsyncExceptionFilter
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IAsyncLogger _asyncLogger;

        public AsyncExceptionFilter(IHostingEnvironment hostingEnvironment, IAsyncLogger asyncLogger)
        {
            _hostingEnvironment = hostingEnvironment;
            _asyncLogger = asyncLogger;
        }

        public Task OnExceptionAsync(ExceptionContext context)
        {
            throw new System.NotImplementedException();
        }
    }
}