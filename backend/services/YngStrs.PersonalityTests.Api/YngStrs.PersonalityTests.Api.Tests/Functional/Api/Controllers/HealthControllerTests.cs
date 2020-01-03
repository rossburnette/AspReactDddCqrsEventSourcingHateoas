using System.Net;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;
using YngStrs.PersonalityTests.Api.Tests.Functional.Helpers;

namespace YngStrs.PersonalityTests.Api.Tests.Functional.Api.Controllers
{
    public class HealthControllerTests
    {
        private readonly AppFixture _fixture;
        private readonly ApiTestsHelper _apiHelper;

        public HealthControllerTests()
        {
            _fixture = new AppFixture();
            _apiHelper = new ApiTestsHelper(_fixture);
        }

        [Fact]
        public Task CanConnectToTestServer() =>
            _apiHelper.InTheContextOfAnAnonymousUser(
                async httpClient =>
                {
                    // Act
                    var response = await httpClient
                        .GetAsync("Health");
                });
    }
}