using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class ArticlesControllerTests
    {
        [Fact]
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<ArticlesController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();
    }
}