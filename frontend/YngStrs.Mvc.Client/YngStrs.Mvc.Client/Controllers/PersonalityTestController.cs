using Microsoft.AspNetCore.Mvc;

namespace YngStrs.Mvc.Client.Controllers
{
    public class PersonalityTestController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }

        //
        public IActionResult Start()
        {
            return View();
        }
    }
}