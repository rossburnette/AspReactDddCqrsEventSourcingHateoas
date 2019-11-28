using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class ChatbotControllerTests
    {
        [Fact]
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<ChatbotController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();

        [Fact]
        public void Questions_Should_Return_Json() =>
            MyController<ChatbotController>
                .Instance()
                .Calling(controller => controller.Questions())
                .ShouldReturn()
                .Json();
    }
}