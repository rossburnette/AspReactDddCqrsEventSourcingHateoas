using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalityTestsController : ControllerBase
    {

        private readonly IMediator _mediator;

        public PersonalityTestsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Retrieves the entire personality test with questions, options and languages.
        /// </summary>
        /// <response code="200">Personality Test.</response>
        [HttpGet(Name = nameof(GetFullPersonalityTest))]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetFullPersonalityTest()
        {
            var result = await _mediator.Send(new GetInitialPersonalityTest());
            return Ok(result);
        }
    }
}