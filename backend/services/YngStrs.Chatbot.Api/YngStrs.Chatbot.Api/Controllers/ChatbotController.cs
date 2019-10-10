using MediatR;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Common.Api;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.Chatbot.Api.Controllers
{
    /// <summary>
    /// A controller responsible for Chat-bot functionality.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ChatbotController : ApiController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ChatbotController"/> class.
        /// </summary>
        /// <param name="resourceMapper"></param>
        /// <param name="mediator"></param>
        public ChatbotController(
            IResourceMapper resourceMapper,
            IMediator mediator)
            : base(resourceMapper, mediator)
        {
        }

    }
}