using MediatR;
using Optional;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands;
using YngStrs.Chatbot.Api.Domain.Repositories;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.CommandHandlers
{
    /// <summary>
    /// Creates event stream for <see cref="UserAnswers"/> aggregate. 
    /// </summary>
    public class RegisterEventStreamHandler : VoidBaseHandler<RegisterEventStream>
    {
        private readonly IUserAnswersRepository _answersRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="RegisterEventStreamHandler"/> class.
        /// </summary>
        /// <param name="eventBus"></param>
        /// <param name="commandValidator"></param>
        public RegisterEventStreamHandler(
            IEventBus eventBus,
            ICommandValidator<RegisterEventStream> commandValidator)
            : base(eventBus, commandValidator)
        {
        }

        public override async Task<Option<Unit, Error>> HandleAsync(RegisterEventStream command, CancellationToken cancellationToken)
        {
            await _answersRepository.CreateUserAnswersEventStreamAsync(command);

            return Unit.Value.Some<Unit, Error>();
        }
    }
}