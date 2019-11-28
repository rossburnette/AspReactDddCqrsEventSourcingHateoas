using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class UsersControllerTests
    {
        [Fact]
        public void Login_Should_Return_Default_View() =>
            MyMvc
                .Controller<UsersController>()
                .Calling(c => c.Login())
                .ShouldReturn()
                .View();

        [Fact]
        public void Register_Should_Return_Default_View() =>
            MyMvc
                .Controller<UsersController>()
                .Calling(c => c.Register())
                .ShouldReturn()
                .View();
    }
}