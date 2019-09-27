using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    public class PersonalityTestController : Controller
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

        //
        public async Task<IActionResult> Start()
        {
            var testModel = await _personalityTestsService.GetAsync();
            return View(testModel);
        }

        [HttpPost]
        public async Task<IActionResult> PrepareResults()
        {
            var x = "";
            return RedirectToAction("Done");
        }

        public IActionResult Done()
        {
            return View();
        }
    }
}