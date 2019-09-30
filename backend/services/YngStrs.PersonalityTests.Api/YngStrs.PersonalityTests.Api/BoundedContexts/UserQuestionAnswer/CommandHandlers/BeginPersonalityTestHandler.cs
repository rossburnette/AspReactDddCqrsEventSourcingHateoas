﻿using System.Threading;
using System.Threading.Tasks;
using Optional;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands;
using YngStrs.PersonalityTests.Api.Domain.Repositories;
using YngStrs.PersonalityTests.Api.Domain.Views.UserQuestionAnswers;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.CommandHandlers
{
    public class BeginPersonalityTestHandler : TypedBaseHandler<BeginPersonalityTest, UserAnswersStreamView>
    {
        private readonly IUserQuestionAnswerRepository _answerRepository;
        public BeginPersonalityTestHandler(
            IEventBus eventBus,
            ICommandValidator<BeginPersonalityTest> validator,
            IUserQuestionAnswerRepository answerRepository)
            : base(eventBus, validator)
        {
            _answerRepository = answerRepository;
        }

        public override Task<Option<UserAnswersStreamView, Error>> HandleAsync(
            BeginPersonalityTest command,
            CancellationToken cancellationToken)
        {
            var eventStream = _answerRepository.CreateUserQuestionAnswerEventStream();
            var result = new UserAnswersStreamView(eventStream.Id).Some<UserAnswersStreamView, Error>();
            return Task.FromResult(result);
        }
    }
}