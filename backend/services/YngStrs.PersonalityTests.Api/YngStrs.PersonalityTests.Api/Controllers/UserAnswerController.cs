using MediatR;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    public class UserAnswerController : ApiController
    {
        public UserAnswerController(IResourceMapper resourceMapper, IMediator mediator) 
            : base(resourceMapper, mediator)
        {
        }

        [HttpPost(nameof(Post))]
        public IActionResult Post()
        {
            return Ok();
        }
    }
}