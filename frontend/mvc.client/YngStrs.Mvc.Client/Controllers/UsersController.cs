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

        public IActionResult ForgottenPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult<string> ForgottenPassword(string email)
        {
            return Ok("{\"status\":true,\"errors\":[]}");
        }

        public IActionResult Profile()
        {
            return View();
        }
    }
}