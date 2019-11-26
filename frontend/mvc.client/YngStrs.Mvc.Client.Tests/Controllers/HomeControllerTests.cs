using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class HomeControllerTests
    {
        [Fact]
        public void AboutUs_Should_Return_Default_View()
            => MyMvc
                .Controller<HomeController>()
                .Calling(c => c.AboutUs())
                .ShouldReturn()
                .View();
    }
}