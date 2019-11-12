using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    public class HomeController : BaseController
    {
        private readonly IUserIdentifierService _identifierService;

        public HomeController(IUserIdentifierService identifierService)
        {
            _identifierService = identifierService;
        }

        public IActionResult Index()
        {
            _identifierService.SetUserAnswersEventStreamId();
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
