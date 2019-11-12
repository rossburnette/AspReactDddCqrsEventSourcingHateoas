using FluentValidation;
using System;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Commands
{
    public class BeginPersonalityTestValidator : AbstractValidator<BeginPersonalityTest>
    {
        public BeginPersonalityTestValidator()
        {
            RuleFor(cmd => cmd.Identifier).NotNull();
            RuleFor(cmd => cmd.Identifier).NotEqual(Guid.Empty);
        }
    }
}