using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Optional;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.CommandHandlers
{
    public class CalculateUserResultHandler : TypedBaseHandler<CalculateUserResult, Guid[]>
    {
        private readonly IUserQuestionAnswerRepository _answerRepository;
        private readonly ITestResultRepository _testResultRepository;

        public CalculateUserResultHandler(
            IEventBus eventBus,
            ICommandValidator<CalculateUserResult> commandValidator,
            IUserQuestionAnswerRepository answerRepository,
            ITestResultRepository testResultRepository)
            : base(eventBus, commandValidator)
        {
            _answerRepository = answerRepository;
            _testResultRepository = testResultRepository;
        }

        public override async Task<Option<Guid[], Error>> HandleAsync(CalculateUserResult command, CancellationToken cancellationToken)
        {
            var events = await _answerRepository.GetEventsByStreamIdAsync(command.UserAnswersEventStreamId);

            var dictionary = ConvertListToTree(events);

            var topResult = await ParseTopTwoTestResultIdsAsync(dictionary);

            return topResult
                .ToArray()
                .Some<Guid[], Error>();
        }

        private static Dictionary<Guid, List<Guid>> ConvertListToTree(IEnumerable<UserAnsweredQuestion> events)
        {
            var dictionary = new Dictionary<Guid, List<Guid>>();

            foreach (var @event in events)
            {
                if (dictionary.ContainsKey(@event.TestResultId))
                {
                    dictionary[@event.TestResultId].Add(@event.ChosenOptionId);
                }
                else
                {
                    dictionary.Add(@event.TestResultId, new List<Guid>
                    {
                        @event.ChosenOptionId
                    });
                }
            }

            return dictionary;
        }

        private async Task<IEnumerable<Guid>> ParseTopTwoTestResultIdsAsync(Dictionary<Guid, List<Guid>> eventTree)
        {
            var topTestResultIds = new List<Guid>();

            if (eventTree.Keys.Count <= 2)
            {
                topTestResultIds.AddRange(eventTree.Keys);
            }
            else
            {
                var orderedPairs = eventTree
                    .OrderByDescending(pair => pair.Value.Count)
                    .ToList();

                // in case user's top styles are the same, we consider him/her as 'complex personality'
                if (orderedPairs[0].Value.Count == orderedPairs[1].Value.Count)
                {
                    var complexPersonalityResult = await _testResultRepository.GetComplexPersonalityResultAsync();
                    topTestResultIds.Add(complexPersonalityResult.Id);
                    return topTestResultIds;
                }

                topTestResultIds.Add(orderedPairs[0].Key);
                topTestResultIds.Add(orderedPairs[1].Key);
            }

            return topTestResultIds;
        }
    }
}