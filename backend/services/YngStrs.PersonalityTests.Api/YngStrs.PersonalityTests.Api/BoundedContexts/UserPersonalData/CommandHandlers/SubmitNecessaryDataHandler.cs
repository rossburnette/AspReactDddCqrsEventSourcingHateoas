using System;
using System.Threading;
using System.Threading.Tasks;
using Marten.Events;
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
        private readonly IUserQuestionAnswerRepository _answerRepository;

        public SubmitNecessaryDataHandler(
            IEventBus eventBus,
            ICommandValidator<SubmitNecessaryData> commandValidator,
            IUserPersonalDataRepository repository,
            IUserQuestionAnswerRepository answerRepository)
            : base(eventBus, commandValidator)
        {
            _repository = repository;
            _answerRepository = answerRepository;
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            SubmitNecessaryData command,
            CancellationToken cancellationToken) =>
            EnsureEventStreamExistsAsync(command).FlatMapAsync(_ =>
            EnsureNoDataForCurrentUserAsync(command).MapAsync(__ =>
            PublishEventsAsync(
                Guid.NewGuid(),
                CreateAggregate(command).SubmitNecessaryData())));
        private Task<Option<StreamState, Error>> EnsureEventStreamExistsAsync(SubmitNecessaryData command) =>
            _answerRepository.GetUserAnswerEventStreamByIdAsync(command.UserEventStreamId);

        private async Task<Option<Domain.Entities.UserPersonalData, Error>> EnsureNoDataForCurrentUserAsync(
            SubmitNecessaryData command) =>
            (await _repository
            .GetByUserIdentifierAsync(command.UserEventStreamId))
            .SomeWhen(data => data == default, Error.Conflict($"Data found for user stream {command.UserEventStreamId}!"));

        private static Domain.Entities.UserPersonalData CreateAggregate(SubmitNecessaryData command) =>
            new Domain.Entities.UserPersonalData(command);
    }
}