using System.Net;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace YngStrs.Common.Api.Filters
{
    /// <inheritdoc />
    /// <summary>
    ///  Global environment-dependent exception handler.
    /// </summary>
    public class ExceptionFilter : IExceptionFilter
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public ExceptionFilter(IHostingEnvironment environment)
        {
            _hostingEnvironment = environment;
        }

        public void OnException(ExceptionContext context)
        {
            var status = (int)HttpStatusCode.InternalServerError;

            var result = _hostingEnvironment.IsDevelopment() ?
                new JsonResult(context.Exception) :
                new JsonResult(Error.Critical("An unexpected internal server error has occurred."));

            context.HttpContext.Response.StatusCode = status;
            context.Result = result;
        }
    }
}