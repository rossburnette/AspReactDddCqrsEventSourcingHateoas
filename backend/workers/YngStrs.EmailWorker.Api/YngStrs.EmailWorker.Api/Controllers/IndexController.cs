using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YngStrs.EmailWorker.Api.Models;
using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Controllers
{
    [Route("api/email-worker")]
    [ApiController]
    public class IndexController : ControllerBase
    {
        private readonly ISendEmailService _sendEmailService;

        public IndexController(ISendEmailService sendEmailService)
        {
            _sendEmailService = sendEmailService;
        }

        [HttpGet("health")]
        public ActionResult<string> Get() => "Email worker service is up and running!";

        [HttpPost]
        public async Task<IActionResult> Post(SendEmailModel model)
        {
            try
            {
                await _sendEmailService.SendMailAsync(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message + " | " + e.InnerException?.Message);
            }

            return NoContent();
        }
    }
}