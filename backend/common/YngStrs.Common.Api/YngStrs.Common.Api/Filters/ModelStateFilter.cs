using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace YngStrs.Common.Api.Filters
{
    /// <summary>
    /// Global model errors handler.
    /// </summary>
    public class ModelStateFilter : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.ModelState.IsValid)
            {
                return;
            }

            var errors = context
                .ModelState
                .Values
                .SelectMany(v => v.Errors.Select(e => e.ErrorMessage));

            context.Result = new BadRequestObjectResult(Error.Validation(errors));
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            throw new System.NotImplementedException();
        }
    }
}