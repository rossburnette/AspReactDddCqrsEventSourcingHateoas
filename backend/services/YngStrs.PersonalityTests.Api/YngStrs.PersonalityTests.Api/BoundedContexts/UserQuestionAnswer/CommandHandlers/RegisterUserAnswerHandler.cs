using Marten.Events;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.CommandHandlers
{
    public class RegisterUserAnswerHandler : VoidBaseHandler<RegisterUserAnswer>
    {
        private readonly IUserQuestionAnswerRepository _answerRepository;
        private readonly IQuestionOptionRepository _questionOptionRepository;

        public RegisterUserAnswerHandler(
            IEventBus eventBus,
            ICommandValidator<RegisterUserAnswer> commandValidator,
            IUserQuestionAnswerRepository answerRepository,
            IQuestionOptionRepository questionOptionRepository)
            : base(eventBus, commandValidator)
        {
            _answerRepository = answerRepository;
            _questionOptionRepository = questionOptionRepository;
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            RegisterUserAnswer command,
            CancellationToken cancellationToken) =>
            EnsureEventStreamExistsAsync(command).FlatMapAsync(_ =>
            EnsureSimilarAnswerDoesNotExistsAsync(command).FlatMapAsync(__ =>
            EnsureQuestionOptionExistsAsync(command).MapAsync(questionOption =>
            PublishEventsAsync(
                command.EventStreamId,
                CreateAggregate(command, questionOption).TestQuestionAnswer()))));

        private Task<Option<StreamState, Error>> EnsureEventStreamExistsAsync(RegisterUserAnswer command) =>
            _answerRepository.GetUserAnswerEventStreamByIdAsync(command.EventStreamId);

        private Task<Option<Domain.Entities.QuestionOption, Error>> EnsureQuestionOptionExistsAsync(RegisterUserAnswer command) =>
            _questionOptionRepository
                .GetWithResultMapByIdAsync(command.ChosenOptionId)
                .SomeNotNullAsync(Error.NotFound($"Test question option with ID '{command.ChosenOptionId}' does not exists!"));

        private async Task<Option<Unit, Error>> EnsureSimilarAnswerDoesNotExistsAsync(RegisterUserAnswer command) =>
            (await _answerRepository
                .GetByUserAndOptionIdAsync(
                    command.ChosenOptionId,
                    command.EventStreamId))
            .SomeWhen(
                answer => answer == default,
                Error.Conflict($"There is already such answer for the current user stream!"))
            .Map(_ => Unit.Value);

        private static Domain.Entities.UserQuestionAnswer CreateAggregate(RegisterUserAnswer command, Domain.Entities.QuestionOption option) =>
            new Domain.Entities.UserQuestionAnswer(
                command.EventStreamId, // Because event stream is unique, it is used as user identifier
                command.ChosenOptionId, // chosen question option
                option.ResultOptionMaps.First().TestResultId); // TODO: pass the test result value as arg, so then we can map it properly
    }
}