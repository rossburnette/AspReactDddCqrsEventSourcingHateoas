using Microsoft.AspNetCore.Http;
using MyTested.AspNetCore.Mvc;
using Xunit;
using YngStrs.Mvc.Client.Controllers;
using YngStrs.Mvc.Client.Services.Business;

using static YngStrs.Mvc.Client.GlobalConstants.UserIdentifier;

namespace YngStrs.Mvc.Client.Tests.Controllers
{
    public class HomeControllerTests
    {
        #region Index Section

        [Fact]
        public void Index_Should_Return_Default_View() =>
            MyMvc
                .Controller<HomeController>()
                .Calling(c => c.Index())
                .ShouldReturn()
                .View();

        [Fact]
        public void Index_Should_Have_User_Identifier_Cookie() =>
            MyController<HomeController>
                .Instance()
                .Calling(controller => controller.Index())
                .ShouldHave()
                .HttpResponse(builder => builder.ContainingCookie(UserAnswersEventStreamId))
                .AndAlso()
                .ShouldReturn()
                .View();

        #endregion About Us Section

        #region Index Section

        [Fact]
        public void AboutUs_Should_Return_Default_View()
            => MyMvc
                .Controller<HomeController>()
                .Calling(c => c.AboutUs())
                .ShouldReturn()
                .View();

        #endregion About Us Section

        #region Contacts Section

        [Fact]
        public void Contacts_Should_Return_Default_View()
            => MyMvc
                .Controller<HomeController>()
                .Calling(c => c.Contacts())
                .ShouldReturn()
                .View();

        #endregion Contacts Section

        #region TermsAndConditions Section

        [Fact]
        public void TermsAndConditions_Should_Return_Default_View()
            => MyMvc
                .Controller<HomeController>()
                .Calling(c => c.TermsAndConditions())
                .ShouldReturn()
                .View();

        #endregion Contacts Section
    }
}