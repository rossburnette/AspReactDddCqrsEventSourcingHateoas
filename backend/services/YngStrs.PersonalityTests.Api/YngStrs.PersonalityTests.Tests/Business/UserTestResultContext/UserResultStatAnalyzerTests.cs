using AutoFixture.Xunit2;
using Xunit;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Services;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Tests.Business.UserTestResultContext
{
    public class UserResultStatAnalyzerTests
    {
        [Theory]
        [AutoData]
        public void Test(TestResultStatistics testResultStatistics)
        {
            var result = new UserResultStatAnalyzer(testResultStatistics);

            var x = result;
        }
    }
}