using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands;
using YngStrs.Chatbot.Api.BoundedContexts.UserPersonalData.Commands;
using YngStrs.Chatbot.Api.Domain.Entities;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.CommandHandlers
{
    public class SaveUserAnswersHandler : VoidBaseHandler<SaveUserAnswers>
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="SaveUserAnswersHandler"/> class.
        /// </summary>
        /// <param name="eventBus"></param>
        /// <param name="commandValidator"></param>
        /// <param name="mediator"></param>
        public SaveUserAnswersHandler(
            IEventBus eventBus,
            ICommandValidator<SaveUserAnswers> commandValidator,
            IMediator mediator)
            : base(eventBus, commandValidator)
        {
            _mediator = mediator;
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            SaveUserAnswers command,
            CancellationToken cancellationToken) =>
            SaveUserNameAndEmailAsync(command, cancellationToken).FlatMapAsync(_ =>
            ParseUserChatBotAnswers(command)).MapAsync(answers =>
            PublishEventsAsync(
                command.EventStreamId,
                CreateAggregate(command, answers).SubmitAnswers()));

        private static Domain.Entities.UserAnswers CreateAggregate(
            SaveUserAnswers command,
            List<UserChatBotAnswer> answers) =>
            new Domain.Entities.UserAnswers(command.EventStreamId, answers);

        private static Task<Option<List<UserChatBotAnswer>, Error>> ParseUserChatBotAnswers(SaveUserAnswers command)
        {
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            var answers = JsonSerializer.Deserialize<IEnumerable<UserChatBotAnswer>>(command.Res, options);

            return Task.FromResult(answers.ToList().Some<List<UserChatBotAnswer>, Error>());
        }

        private Task<Option<Unit, Error>> SaveUserNameAndEmailAsync(
            SaveUserAnswers command,
            CancellationToken cancellationToken) =>
            _mediator.Send(new ProcessNecessaryData(command.Form, command.EventStreamId), cancellationToken);
    }
}