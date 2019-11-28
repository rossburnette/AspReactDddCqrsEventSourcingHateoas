using Microsoft.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Controllers
{
    /// <summary>
    /// Controller showing basic project information.
    /// </summary>
    public class HomeController : BaseController
    {
        private readonly IUserIdentifierService _identifierService;

        public HomeController(IUserIdentifierService identifierService)
        {
            _identifierService = identifierService;
        }

        /// <summary>
        /// Main page of the application.
        /// </summary>
        public IActionResult Index()
        {
            _identifierService.SetUserAnswersEventStreamId();
            return View();
        }

        /// <summary>
        /// The page that provides data about the project.
        /// </summary>
        public IActionResult AboutUs()
        {
            return View();
        }

        /// <summary>
        /// The page that provides channels to contact the admin.
        /// </summary>
        public IActionResult Contacts()
        {
            return View();
        }

        /// <summary>
        /// The page that shows the terms and conditions.
        /// </summary>
        public IActionResult TermsAndConditions()
        {
            return View();
        }
    }
}
