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
            // todo: request 'FIRE & FORGET' to registrar stream for possible answers.
            return View();
        }

        // GET
        public IActionResult Questions()
        {
            return Json(_chatbotService.GetQuestionsContent());
        }

        /// <summary>
        /// Sends chatbot question/user answer collection to the API.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> SaveResults(
            [FromForm] ChatbotResultsRootObject rootObject)
        {
            if (rootObject.Res == "[]")
            {
                return Ok(new SaveChatbotResultsModel(false));
            }

            var result = await _chatbotService.SaveUserChatbotAnswersAsync(rootObject);

            if (result == null)
            {
                return BadRequest();
            }

            return Ok(result);
        }
    }
}