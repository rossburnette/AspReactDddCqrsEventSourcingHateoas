using FluentValidation;
using System;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class SaveUserTestResultValidator : AbstractValidator<SaveUserTestResult>
    {
        public SaveUserTestResultValidator()
        {
            RuleFor(cmd => cmd.UserIdentifier).NotEqual(Guid.Empty);
            RuleFor(cmd => cmd.UserIdentifier).NotNull();
        }
    }
}