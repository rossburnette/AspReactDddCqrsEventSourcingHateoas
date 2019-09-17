using Optional;

namespace YngStrs.Common.Cqrs.Core
{
    public interface ICommandValidator<TCommand>
    {
        Option<TCommand, Error> Validate(TCommand command);
    }
}