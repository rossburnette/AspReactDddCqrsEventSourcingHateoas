using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;
using YngStrs.Common;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.Tests.Customizations;
using YngStrs.Identity.Api.Tests.Extensions;

namespace YngStrs.Identity.Api.Tests.Functional.AuthContext
{
    public class LoginHandlerTests
    {
        private readonly AppFixture _fixture;

        public LoginHandlerTests()
        {
            _fixture = new AppFixture();
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CanLogin(Register registerUserCommand)
        {
            // Arrange
            await _fixture.SendAsync(registerUserCommand);

            var loginCommand = new Login
            {
                Email = registerUserCommand.Email,
                Password = registerUserCommand.Password
            };

            // Act
            var result = await _fixture.SendAsync(loginCommand);

            result
                .Exists(jwt => IsValidJwtString(jwt.TokenString))
                .Should()
                .BeTrue();
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CannotLoginWithInvalidCredentials(Register registerUserCommand)
        {
            // Arrange
            await _fixture.SendAsync(registerUserCommand);

            var loginCommand = new Login
            {
                Email = registerUserCommand.Email,
                Password = registerUserCommand.Password + "123" // Must be different
            };

            // Act
            var result = await _fixture.SendAsync(loginCommand);

            // Assert
            result.ShouldHaveErrorOfType(ErrorType.Unauthorized);
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CannotLoginWithInvalidEmail(Login command)
        {
            // Arrange
            command.Email = "invalid-email";

            // Act
            var result = await _fixture.SendAsync(command);

            // Assert
            result.ShouldHaveErrorOfType(ErrorType.Validation);
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CannotLoginWithUnexcitingEmail(Login command)
        {
            // Arrange
            // We are not registering any users so the email is definitely not going to be found

            // Act
            var result = await _fixture.SendAsync(command);

            // Assert
            result.ShouldHaveErrorOfType(ErrorType.NotFound);
        }

        private static bool IsValidJwtString(string tokenString)
        {
            try
            {
                var decodedJwt = new JwtSecurityToken(tokenString);

                return true;
            }
            catch (ArgumentException)
            {
                return false;
            }
        }
    }
}