using FluentAssertions;
using Xunit;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Services;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Tests.Unit
{
    public class UserResultStatAnalyzerTests
    {
        [Fact]
        public void ValuesDictionary_Keeps_Right_Order()
        {
            // Arrange
            var resultStatistics = new TestResultStatistics
            {
                Action = 8,
                Idea = 3,
                People = 5,
                Process = 17
            };

            // Act
            var analyzer = new UserResultStatAnalyzer(resultStatistics);

            // Assert 
            var keyValuePairs = analyzer.ValuePairs;

            keyValuePairs[3]
                .Key
                .Should()
                .Be(nameof(resultStatistics.Idea).ToLower());

            keyValuePairs[2]
                .Key
                .Should()
                .Be(nameof(resultStatistics.People).ToLower());

            keyValuePairs[1]
                .Key
                .Should()
                .Be(nameof(resultStatistics.Action).ToLower());

            keyValuePairs[0]
                .Key
                .Should()
                .Be(nameof(resultStatistics.Process).ToLower());
        }

        [Fact]
        public void GetTopResults_Returns_Most_Common_Single_Scheme()
        {
            // Arrange
            var resultStatistics = new TestResultStatistics
            {
                Action = 14,
                Idea = 16,
                People = 2,
                Process = 27
            };

            // Act
            var analyzer = new UserResultStatAnalyzer(resultStatistics);
            var topResultArr = analyzer.GetTopResults();

            // Assert
            topResultArr
                .Length
                .Should()
                .Be(1);

            topResultArr[0]
                .Should()
                .Be(nameof(resultStatistics.Process).ToLower());
        }

        [Fact]
        public void GetTopResults_Returns_Most_Common_Schemes()
        {
            // Arrange
            var resultStatistics = new TestResultStatistics
            {
                Action = 14,
                Idea = 16,
                People = 16,
                Process = 5
            };

            // Act
            var analyzer = new UserResultStatAnalyzer(resultStatistics);
            var topResultArr = analyzer.GetTopResults();

            // Assert
            topResultArr
                .Length
                .Should()
                .Be(2);

            var topResults = new[]
            {
                $"{nameof(resultStatistics.Idea).ToLower()}",
                $"{nameof(resultStatistics.People).ToLower()}"
            };

            topResultArr[0]
                .Should()
                .BeOneOf(topResults);

            topResults[1]
                .Should()
                .BeOneOf(topResults);
        }
    }
}
