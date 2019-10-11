using Microsoft.AspNetCore.Mvc;

namespace YngStrs.Mvc.Client.Controllers
{
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Contacts()
        {
            return View();
        }
    }
}
