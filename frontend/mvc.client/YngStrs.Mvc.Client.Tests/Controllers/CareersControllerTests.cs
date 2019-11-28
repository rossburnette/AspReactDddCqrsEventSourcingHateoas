using MyTested.AspNetCore.Mvc;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class CareersControllerTests
    {
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<CareersController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();
    }
}