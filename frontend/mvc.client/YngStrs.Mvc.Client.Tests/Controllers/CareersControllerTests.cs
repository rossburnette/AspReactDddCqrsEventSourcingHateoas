using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class CareersControllerTests
    {
        [Fact]
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<CareersController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();
    }
}