using FluentValidation;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Commands
{
    public class RegisterValidator : AbstractValidator<Register>
    {
        public RegisterValidator()
        {
            RuleFor(c => c.Email).NotNull();
            RuleFor(c => c.Email).EmailAddress();
            RuleFor(c => c.Password).NotNull();
        }
    }
}