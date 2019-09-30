using System.Linq;
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
using YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands;
using YngStrs.PersonalityTests.Api.Domain.Entities;
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

        public override Task<Option<Unit, Error>> HandleAsync(RegisterUserAnswer command,
            CancellationToken cancellationToken) =>
            EnsureEventStreamExistsAsync(command).FlatMapAsync(_ =>
            EnsureQuestionOptionExistsAsync(command).MapAsync(questionOption =>
            PublishEventsAsync(command.EventStreamId, CreateAggregate(command, questionOption).TestQuestionAnswer())));

        private Task<Option<StreamState, Error>> EnsureEventStreamExistsAsync(RegisterUserAnswer command) =>
            _answerRepository
                .GetUserQuestionAnswerEventStreamByIdAsync(command.EventStreamId)
                .SomeNotNullAsync(Error.NotFound($"Event stream with ID '{command.EventStreamId}' does not exists!"));

        private Task<Option<QuestionOption, Error>> EnsureQuestionOptionExistsAsync(RegisterUserAnswer command) =>
            _questionOptionRepository
                .GetWithResultMapByIdAsync(command.ChosenOptionId)
                .SomeNotNullAsync(Error.NotFound($"Test question option with ID '{command.ChosenOptionId}' does not exists!"));

        private static Domain.Entities.UserQuestionAnswer CreateAggregate(RegisterUserAnswer command, QuestionOption option) =>
            new Domain.Entities.UserQuestionAnswer(command.ChosenOptionId, option.ResultOptionMaps.First().Id);
    }
}