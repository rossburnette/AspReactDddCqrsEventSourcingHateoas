using FluentValidation;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands
{
    public class RegisterUserAnswerValidator : AbstractValidator<RegisterUserAnswer>
    {
        public RegisterUserAnswerValidator()
        {
            RuleFor(cmd => cmd.EventStreamId).NotNull();
            RuleFor(cmd => cmd.ChosenOptionId).NotNull();
        }
    }
}