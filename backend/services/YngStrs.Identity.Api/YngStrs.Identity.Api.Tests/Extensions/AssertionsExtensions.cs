using FluentAssertions;
using Optional;
using YngStrs.Common;

namespace YngStrs.Identity.Api.Tests.Extensions
{
    public static class AssertionsExtensions
    {
        public static void ShouldHaveErrorOfType<T>(this Option<T, Error> option, ErrorType errorType)
        {
            option
                .HasValue
                .Should()
                .BeFalse();

            option.MatchNone(error =>
            {
                error.Type.Should().Be(
                    errorType,
                    $"Expected an error of type {errorType.ToString()}, but got {error.Type.ToString()}: {string.Join(", ", error.Messages)}");

                error
                    .Messages
                    .Should()
                    .NotBeEmpty();
            });
        }

    }
}