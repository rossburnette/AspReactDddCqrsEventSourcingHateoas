using FluentValidation;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands
{
    public class SubmitNecessaryDataValidator : AbstractValidator<SubmitNecessaryData>
    {
        public SubmitNecessaryDataValidator()
        {
            RuleFor(data => data.UserEventStreamId).NotNull();
            RuleFor(data => data.Name).NotEmpty();
            RuleFor(data => data.Email).EmailAddress();
        }
    }
}