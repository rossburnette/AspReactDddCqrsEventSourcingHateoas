using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class PersonalityTestControllerTests
    {
        [Fact]
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<PersonalityTestController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();
    }
}