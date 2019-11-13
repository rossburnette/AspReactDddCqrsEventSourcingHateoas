using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Models.PersonalityTest;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    public class PersonalityTestController : BaseController
    {
        private readonly IPersonalityTestsService _personalityTestsService;

        public PersonalityTestController(IPersonalityTestsService personalityTestsService)
        {
            _personalityTestsService = personalityTestsService;
        }

        // GET
        public IActionResult Index()
        {
            return View();
        }

        /// GET /PersonalityTest/Start
        /// <summary>
        /// Personality test page.
        /// </summary>
        public async Task<IActionResult> Start()
        {
            var viewModel = await _personalityTestsService.GetPersonalityTestAsync();
            return View(viewModel);
        }

        public IActionResult RegisterUserAnswer()
        {
            _personalityTestsService.RegisterUserAnswerAsync()
            return Ok();
        }

        /// <summary>
        /// Receives current user answers and results.
        /// </summary>
        /// <param name="v">Date of submission.</param>
        /// <param name="i">Test Stats & Answers</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> SubmitAnswers(
            [FromQuery]string v,
            [FromBody]PersonalityTestBindingModel i)
        {
            var requestSucceeded = await _personalityTestsService.SaveUserTestResultsAsync(i);

            if (!requestSucceeded)
            {
                return BadRequest();
            }

            var result = new
            {
                redirect = "https://localhost:5001/PersonalityTest/Done",
            };

            return Json(result);
        }

        // GET
        public IActionResult Done()
        {
            return View();
        }
    }
}