using System;
using FluentValidation;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands
{
    public class RegisterEventStreamValidator : AbstractValidator<RegisterEventStream>
    {
        public RegisterEventStreamValidator()
        {
            RuleFor(cmd => cmd.Identifier).NotNull();
            RuleFor(cmd => cmd.Identifier).NotEqual(Guid.Empty);
        }
    }
}