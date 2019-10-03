using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    /// <summary>
    /// Controller responsible for business logic linked with <see cref="UserQuestionAnswer"/>.
    /// </summary>
    [Route("api/personality-tests/user-answer")]
    [ApiController]
    public class UserAnswersController : ApiController
    {
        public UserAnswersController(
            IResourceMapper resourceMapper,
            IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

        /// <summary>
        /// Creates new event for <see cref="UserQuestionAnswer"/> aggregate.
        /// </summary>
        /// <param name="command"></param>
        /// <response code="201">User answer saved.</response>
        /// <response code="404">Event stream ID or question option ID invalid.</response>
        /// <response code="409">Similar answer for user already exists.</response>
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType(typeof(Error), (int)HttpStatusCode.NotFound)]
        [ProducesResponseType(typeof(Error), (int)HttpStatusCode.Conflict)]
        public async Task<IActionResult> RegisterUserAnswer([FromBody] RegisterUserAnswer command) =>
            (await Mediator.Send(command))
            .Match(
                some: _ => CreatedAtAction(nameof(RegisterUserAnswer), null),
                none: Error);
    }
}