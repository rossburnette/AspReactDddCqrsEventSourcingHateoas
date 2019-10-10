using System.Collections.Generic;
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
        public IActionResult SaveResults([FromForm] ChatbotResultsRootObject rootObject)
        {
            _chatbotService.ArrangeUserAnswers(rootObject);

            return Ok();
        }

    }
}