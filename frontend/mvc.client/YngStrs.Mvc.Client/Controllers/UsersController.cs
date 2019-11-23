using Microsoft.AspNetCore.Mvc;

namespace YngStrs.Mvc.Client.Controllers
{
    public class UsersController : BaseController
    {
        // GET
        public IActionResult Login()
        {
            return View();
        }

        // GET
        public IActionResult Register()
        {
            return View();
        }
    }
}