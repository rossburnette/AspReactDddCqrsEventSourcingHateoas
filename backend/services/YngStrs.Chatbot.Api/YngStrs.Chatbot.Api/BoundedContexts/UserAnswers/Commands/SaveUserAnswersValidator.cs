using FluentValidation;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands
{
    public class SaveUserAnswersValidator : AbstractValidator<SaveUserAnswers>
    {
        public SaveUserAnswersValidator()
        {
            RuleFor(answers => answers.Res).NotNull();
            RuleFor(answers => answers.Res).NotEmpty();
        }
    }
}