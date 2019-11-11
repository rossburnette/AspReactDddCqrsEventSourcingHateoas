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
            var testModel = await _personalityTestsService.GetStructuredAsync();
            return View(testModel);
        }

        [HttpPost]
        public IActionResult Form(
            [FromQuery]string v,
            [FromForm]PersonalityTestBindingModel bindingModel)
        {
            var x = bindingModel;
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