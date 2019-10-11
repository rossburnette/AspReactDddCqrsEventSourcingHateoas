using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Models.Chatbot;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    public class ChatbotController : BaseController
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

        // GET
        public IActionResult Questions()
        {
            return Json(_chatbotService.GetQuestionsContent());
        }

        [HttpPost]
        public async Task<IActionResult> SaveResults([FromForm] ChatbotResultsRootObject rootObject)
        {
            if (rootObject.Res == "[]")
            {
                return BadRequest();
            }

            var isSuccessResult = await _chatbotService.SaveUserChatbotAnswersAsync(rootObject);

            if (isSuccessResult)
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}