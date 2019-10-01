using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.CommandHandlers
{
    public class SubmitNecessaryDataHandler : VoidBaseHandler<SubmitNecessaryData>
    {
        private readonly IUserPersonalDataRepository _repository;
        public SubmitNecessaryDataHandler(
            IEventBus eventBus,
            ICommandValidator<SubmitNecessaryData> commandValidator,
            IUserPersonalDataRepository repository)
            : base(eventBus, commandValidator)
        {
            _repository = repository;
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            SubmitNecessaryData command,
            CancellationToken cancellationToken) => 
            EnsureNoDataForCurrentUserAsync(command).MapAsync(_ => 
            PublishEventsAsync(Guid.NewGuid(), CreateAggregate(command).SubmitNecessaryData()));

        private async Task<Option<Domain.Entities.UserPersonalData, Error>> EnsureNoDataForCurrentUserAsync(
            SubmitNecessaryData command) =>
            (await _repository
            .GetByUserIdentifierAsync(command.UserEventStreamId))
            .SomeWhen(data => data == default, Error.Conflict($"Data found for user stream {command.UserEventStreamId}!"));

        private static Domain.Entities.UserPersonalData CreateAggregate(SubmitNecessaryData command) =>
            new Domain.Entities.UserPersonalData(command);

    }
}