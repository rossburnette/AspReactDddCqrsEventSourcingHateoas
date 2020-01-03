using Microsoft.AspNetCore.Mvc;

namespace YngStrs.PersonalityTests.Api.Controllers
{
    [Route("api/personality-tests/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok();
    }
}