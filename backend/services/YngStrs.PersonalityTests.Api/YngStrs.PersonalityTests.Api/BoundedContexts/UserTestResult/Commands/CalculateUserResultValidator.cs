using FluentValidation;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class CalculateUserResultValidator : AbstractValidator<CalculateUserResult>
    {
        public CalculateUserResultValidator()
        {
            RuleFor(result => result.UserAnswersEventStreamId).NotNull();
        }
    }
}