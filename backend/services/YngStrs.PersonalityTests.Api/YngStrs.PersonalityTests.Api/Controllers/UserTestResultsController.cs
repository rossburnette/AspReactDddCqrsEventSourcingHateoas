using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Optional.Async.Extensions;
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
        public UserTestResultsController(
            IResourceMapper resourceMapper,
            IMediator mediator) : base(resourceMapper, mediator)
        {
        }

        /// <summary>
        /// Calculates and saves user test result.
        /// </summary>
        /// <param name="command"></param>
        /// <response code="200">
        /// <see cref="TestResult"/> identifiers (IDs).
        /// </response>
        [HttpPost(Name = nameof(UserResult))]
        [ProducesResponseType(typeof(UserTestResultResource), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> UserResult(CalculateUserResult command) =>
            (await Mediator.Send(command)
            .MapAsync(ToResourceAsync<UserTestResultView, UserTestResultResource>))
            .Match(Ok, Error);
    }
}