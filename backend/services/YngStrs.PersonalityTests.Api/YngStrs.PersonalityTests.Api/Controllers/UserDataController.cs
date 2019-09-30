using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Optional.Async.Extensions;
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
        public UserDataController(IResourceMapper resourceMapper, IMediator mediator) : base(resourceMapper, mediator)
        {
        }


        [HttpPost]
        public async Task<IActionResult> SaveUserData(SubmitNecessaryData command) =>
            (await Mediator.Send(command)
            .MapAsync(ToEmptyResourceAsync<UserDataResource>))
            .Match(Ok, Error);
    }
}