using MediatR;
using Microsoft.AspNetCore.Mvc;
using Optional.Async.Extensions;
using System.Net;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands;
using YngStrs.PersonalityTests.Api.Hateoas.Resources.UserPersonalData;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    /// <summary>
    /// Controller responsible for properly persisting user data.
    /// </summary>
    [Route("api/personality-tests/user-data")]
    [ApiController]
    public class UserDataController : ApiController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserDataController"/> class.
        /// </summary>
        public UserDataController(IResourceMapper resourceMapper, IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

        /// <summary>
        /// Saves user email and name after test completed.
        /// </summary>
        /// <param name="command"></param>
        /// <response code="200">Data saved.</response>
        /// <response code="404">Invalid <see cref="SubmitNecessaryData.UserEventStreamId"/></response>
        /// <response code="409">User data already saved.</response>
        [HttpPost(Name = nameof(SaveUserData))]
        [ProducesResponseType(typeof(UserDataResource), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Error), (int)HttpStatusCode.NotFound)]
        [ProducesResponseType(typeof(Error), (int)HttpStatusCode.Conflict)]
        public async Task<IActionResult> SaveUserData(SubmitNecessaryData command) =>
            (await Mediator.Send(command)
            .MapAsync(ToEmptyResourceAsync<UserDataResource>))
            .Match(Ok, Error);
    }
}