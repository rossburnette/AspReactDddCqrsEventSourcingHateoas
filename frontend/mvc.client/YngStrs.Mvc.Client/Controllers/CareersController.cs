using Microsoft.AspNetCore.Mvc;

namespace YngStrs.Mvc.Client.Controllers
{
    public class CareersController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}