using System.Linq;
using System.Threading.Tasks;
using Xunit;
using YngStrs.Identity.Api.BoundedContexts.Auth;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.Hateoas.Resources.LoginPrinciple;
using YngStrs.Identity.Api.Tests.Customizations;
using YngStrs.Identity.Api.Tests.Functional.Helpers;
using System.Net.Http;
using AspNetCore.Http.Extensions;
using FluentAssertions;
using YngStrs.Identity.Api.Tests.Extensions;


namespace YngStrs.Identity.Api.Tests.Functional.Controllers
{
    public class AuthControllerTests 
    {
        private readonly AppFixture _fixture;
        private readonly ApiTestsHelper _apiHelper;
        private readonly AuthTestsHelper _authHelper;

        public AuthControllerTests()
        {
            _fixture = new AppFixture();
            _apiHelper = new ApiTestsHelper(_fixture);
            _authHelper = new AuthTestsHelper(_fixture);
        }

        [Theory]
        [CustomizedAutoData]
        public async Task LoginShouldSetProperHttpOnlyCookie(Register register)
        {
            // Arrange
            await _authHelper.Register(register);

            var loginCommand = new Login
            {
                Email = register.Email,
                Password = register.Password
            };

            // Act
            var response = await _fixture.ExecuteHttpClientAsync<HttpResponseMessage>(client =>
                client.PostAsJsonAsync(AuthRoute("login"), loginCommand));

            // Assert
            var token = (await response.ShouldDeserializeTo<LoginResource>()).TokenString;

            response
                .Headers
                .Should()
                .Contain(header =>
                    header.Key == "Set-Cookie" &&
                    header.Value.Any(x => x.Contains(AuthConstants.Cookies.AuthCookieName) && x.Contains(token)));
        }

        private static string AuthRoute(string route = null) =>
            $"/auth/{route?.TrimStart('/') ?? string.Empty}";
    }
}