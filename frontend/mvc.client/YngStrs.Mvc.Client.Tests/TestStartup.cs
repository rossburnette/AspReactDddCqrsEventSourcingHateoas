using Microsoft.Extensions.Configuration;

namespace YngStrs.Mvc.Client.Tests
{
    public class TestStartup : Startup
    {
        public TestStartup(IConfiguration configuration)
            : base(configuration)
        {
            
        }
    }
}