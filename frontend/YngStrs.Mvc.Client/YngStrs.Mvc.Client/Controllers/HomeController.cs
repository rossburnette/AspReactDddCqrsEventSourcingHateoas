﻿using Microsoft.AspNetCore.Mvc;

namespace YngStrs.Mvc.Client.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
