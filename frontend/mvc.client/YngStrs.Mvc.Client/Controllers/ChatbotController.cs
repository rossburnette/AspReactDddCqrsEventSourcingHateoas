using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Models.Chatbot;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    public class ChatbotController : Controller
    {
        private readonly IChatbotService _chatbotService;

        public ChatbotController(IChatbotService chatbotService)
        {
            _chatbotService = chatbotService;
        }

        // GET
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Questions()
        {
            return Json(_chatbotService.GetQuestionsContent());
        }

        [HttpPost]
        public async Task<IActionResult> SaveResults([FromForm] ChatbotResultsRootObject rootObject)
        {
            var isSuccessResult = await _chatbotService.SaveUserChatbotAnswersAsync(rootObject);

            if (isSuccessResult)
            {
                return Ok();
            }

            return BadRequest();
        }

    }
}