using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;
using YngStrs.PersonalityTests.Api.Domain.Views.UserQuestionAnswers;
using YngStrs.PersonalityTests.Api.Hateoas.Resources.UserQuestionAnswer;
using Optional.Async.Extensions;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    /// <summary>
    /// Controller responsible for retrieving the main business logic for <c>YngStrs.PersonalityTests.Api</c>.
    /// </summary>
    [Route("api/personality-tests")]
    [ApiController]
    public class PersonalityTestsController : ApiController
    {
        public PersonalityTestsController(IResourceMapper resourceMapper, IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

        /// GET /api/personality-tests
        /// <summary>
        /// Retrieves the entire personality test with questions, options and languages.
        /// </summary>
        /// <response code="200"></response>
        [HttpGet(Name = nameof(GetFullPersonalityTest))]
        [ProducesResponseType(typeof(IList<InitPersonalityTestView>), (int) HttpStatusCode.OK)]
        public async Task<IActionResult> GetFullPersonalityTest() =>
            Ok(await Mediator.Send(new GetInitialPersonalityTest()));

        /// POST /api/personality-tests/begin
        /// <summary>
        /// Creates event stream for <see cref="UserQuestionAnswer"/> aggregate.
        /// </summary>
        /// <returns>
        /// Event Stream ID
        /// </returns>
        /// <response code="200"></response>
        [HttpPost("begin", Name = nameof(BeginTest))]
        [ProducesResponseType(typeof(UserAnswersStreamResource), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> BeginTest() => 
            (await Mediator.Send(new BeginPersonalityTest())
                .MapAsync(ToResourceAsync<UserAnswersStreamView, UserAnswersStreamResource>))
                .Match(Ok, Error);
    }
}