using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Xunit;
using YngStrs.Common;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.Tests.Customizations;
using YngStrs.Identity.Api.Tests.Extensions;

namespace YngStrs.Identity.Api.Tests.Functional.AuthContext
{
    public class RegisterHandlerTests : ResetDatabaseLifetime
    {
        private readonly AppFixture _fixture;

        public RegisterHandlerTests()
        {
            _fixture = new AppFixture();
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CanRegister(Register command)
        {
            // Act
            var result = await _fixture.SendAsync(command);

            // Assert
            result
                .HasValue
                .Should()
                .BeTrue();

            //var userInDb = await _fixture
            //    .ExecuteDbContextAsync(context => context.Users.FirstOrDefaultAsync(u => u.Email == command.Email));

            //userInDb
            //    .Email
            //    .Should()
            //    .Be(command.Email);
        }

        [Theory]
        [CustomizedAutoData]
        public async Task CannotRegisterWithInvalidEmail(Register command)
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
        public async Task CannotRegisterTheSameEmailTwice(Register command)
        {
            // Arrange
            // First register
            await _fixture.SendAsync(command);

            // Act
            var result = await _fixture.SendAsync(command);

            // Assert
            result.ShouldHaveErrorOfType(ErrorType.Conflict);
        }
    }
}