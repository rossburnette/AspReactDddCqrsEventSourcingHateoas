using FluentValidation;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserPersonalData.Commands
{
    public class ProcessNecessaryDataValidator : AbstractValidator<ProcessNecessaryData>
    {
        public ProcessNecessaryDataValidator()
        {
            RuleFor(data => data.RawData).NotNull();
            RuleFor(data => data.RawData).NotEmpty();
            RuleFor(data => data.RawData).Must(text => text.StartsWith("name="));
        }
    }
}