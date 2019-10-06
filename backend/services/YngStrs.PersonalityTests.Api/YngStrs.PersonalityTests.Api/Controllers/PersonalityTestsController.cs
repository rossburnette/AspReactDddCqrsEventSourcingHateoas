using MediatR;
using Microsoft.AspNetCore.Mvc;
using Optional.Async.Extensions;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Commands;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;
using YngStrs.PersonalityTests.Api.Domain.Views.TestQuestions;
using YngStrs.PersonalityTests.Api.Domain.Views.UserQuestionAnswers;
using YngStrs.PersonalityTests.Api.Hateoas.Resources.UserQuestionAnswer;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    /// <summary>
    /// Controller responsible for retrieving the main business logic for <c>YngStrs.PersonalityTests.Api</c>.
    /// </summary>
    [Route("api/personality-tests")]
    [ApiController]
    public class PersonalityTestsController : ApiController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PersonalityTestsController"/> class.
        /// </summary>
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
        [ProducesResponseType(typeof(IList<InitPersonalityTestView>), (int)HttpStatusCode.OK)]
        [ResponseCache(Duration = int.MaxValue, Location = ResponseCacheLocation.Any, NoStore = false)]
        public async Task<IActionResult> GetFullPersonalityTest() =>
            Ok(await Mediator.Send(new GetInitialPersonalityTest()));

        /// GET /api/personality-tests/structured
        /// <summary>
        /// Retrieves the entire personality test structured in a tree.
        /// </summary>
        /// <response code="200"></response>
        [HttpGet("structured", Name = nameof(GetStructuredPersonalityTest))]
        [ProducesResponseType(typeof(IList<IList<TestQuestionView>>), (int)HttpStatusCode.OK)]
        [ResponseCache(Duration = int.MaxValue, Location = ResponseCacheLocation.Any, NoStore = false)]
        public async Task<IActionResult> GetStructuredPersonalityTest() =>
            Ok(await Mediator.Send(new GetStructuredTest()));

        /// POST /api/personality-tests/begin
        /// <summary>
        /// Creates event stream for <see cref="UserQuestionAnswer"/> aggregate.
        /// </summary>
        /// <returns>
        /// Event Stream ID.
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