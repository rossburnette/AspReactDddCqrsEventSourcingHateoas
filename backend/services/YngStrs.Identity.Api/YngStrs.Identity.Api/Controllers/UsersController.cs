using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;
using YngStrs.Identity.Api.BoundedContexts.Auth;

namespace YngStrs.Identity.Api.Controllers
{
    /// <summary>
    /// Controller responsible for user management.
    /// </summary>
    [Route("api/users")]
    [ApiController]
    public class UsersController : ApiController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UsersController"/> class.
        /// </summary>
        /// <param name="resourceMapper"></param>
        /// <param name="mediator"></param>
        public UsersController(IResourceMapper resourceMapper, IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

        /// <summary>
        /// Retrieves the currently logged in user.
        /// </summary>
        [HttpGet("current", Name = nameof(GetCurrentUser))]
        public async Task<IActionResult> GetCurrentUser() => Ok();

        /// <summary>
        /// Retrieves all user accounts.
        /// </summary>
        [HttpGet("all", Name = nameof(GetAllUserAccounts))]
        [Authorize(Policy = AuthConstants.Policies.IsAdmin)]
        public async Task<IActionResult> GetAllUserAccounts() => Ok();
    }
}