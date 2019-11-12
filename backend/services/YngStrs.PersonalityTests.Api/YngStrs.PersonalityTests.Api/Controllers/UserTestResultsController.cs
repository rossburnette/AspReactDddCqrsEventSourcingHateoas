using MediatR;
using Microsoft.AspNetCore.Mvc;
using Optional.Async.Extensions;
using System.Net;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Views.UserTestResult;
using YngStrs.PersonalityTests.Api.Hateoas.Resources.UserTestResult;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    /// <summary>
    /// A controller responsible for user test result.
    /// </summary>
    [Route("api/personality-tests/user-result")]
    [ApiController]
    public class UserTestResultsController : ApiController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserTestResultsController"/> class.
        /// </summary>
        public UserTestResultsController(
            IResourceMapper resourceMapper,
            IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

        /// <summary>
        /// Saves the user test answers and test statistics in the event store.
        /// </summary>
        /// <param name="command">Client binding model.</param>
        /// <response code="200">User test result saved.</response>
        /// <response code="404">Invalid <see cref="SaveUserTestResult.UserIdentifier"/></response>
        [HttpPost("save", Name = nameof(PersistUserTestResult))]
        [ProducesResponseType(typeof(Unit), (int) HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Error), (int) HttpStatusCode.NotFound)]
        public async Task<IActionResult> PersistUserTestResult(SaveUserTestResult command) =>
            (await Mediator.Send(command))
            .Match(_ => Ok(), Error);
    }
}