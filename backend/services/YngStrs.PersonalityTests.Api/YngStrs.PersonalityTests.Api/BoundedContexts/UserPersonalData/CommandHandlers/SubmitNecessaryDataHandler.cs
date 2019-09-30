using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Optional;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.CommandHandlers
{
    public class SubmitNecessaryDataHandler : VoidBaseHandler<SubmitNecessaryData>
    {
        public SubmitNecessaryDataHandler(
            IEventBus eventBus,
            ICommandValidator<SubmitNecessaryData> commandValidator)
            : base(eventBus, commandValidator)
        {
        }

        public override async Task<Option<Unit, Error>> HandleAsync(
            SubmitNecessaryData command,
            CancellationToken cancellationToken)
        {
            await PublishEventsAsync(
                command.EventStreamId,
                new Domain.Entities.UserPersonalData(command.Name, command.Email)
                    .SubmitNecessaryData());

            return Unit.Value.Some<Unit, Error>();
        }
            
    }
}