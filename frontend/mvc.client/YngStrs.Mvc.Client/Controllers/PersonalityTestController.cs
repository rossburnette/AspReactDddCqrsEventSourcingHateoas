using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Models;
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
        public IActionResult Form(
            [FromQuery]string v,
            [FromForm] object model)
        {
            var result = new
            {
                redirect = "https://localhost:5001/PersonalityTest/Done",
            };

            return Json(result);
        }

        public IActionResult Done()
        {
            return View();
        }
    }
}