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
using YngStrs.PersonalityTests.Api.Domain.Views.UserTestResult;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.CommandHandlers
{
    public class CalculateUserResultHandler : TypedBaseHandler<CalculateUserResult, UserTestResultView>
    {
        private static readonly Guid _initialPersonalityTestId = Guid.Parse("00ff378b-c5e4-4933-81f4-52bc84f2ca9c");

        private readonly IUserQuestionAnswerRepository _answerRepository;
        private readonly ITestResultRepository _testResultRepository;
        private readonly IUserTestResultRepository _userTestResultRepository;

        public CalculateUserResultHandler(
            IEventBus eventBus,
            ICommandValidator<CalculateUserResult> commandValidator,
            IUserQuestionAnswerRepository answerRepository,
            ITestResultRepository testResultRepository,
            IUserTestResultRepository userTestResultRepository)
            : base(eventBus, commandValidator)
        {
            _answerRepository = answerRepository;
            _testResultRepository = testResultRepository;
            _userTestResultRepository = userTestResultRepository;
        }

        public override async Task<Option<UserTestResultView, Error>> HandleAsync(
            CalculateUserResult command,
            CancellationToken cancellationToken)
        {
            var userTestResult = await _userTestResultRepository
                .GetByUserAndTestAsync(command.UserAnswersEventStreamId, _initialPersonalityTestId);

            if (userTestResult != default)
            {
                return Option.None<UserTestResultView, Error>(
                    Error.Conflict($"There is already a reported result for user stream ID: {command.UserAnswersEventStreamId}."));
            }

            var answers = await _answerRepository.GetAnswersByUserStreamAsync(command.UserAnswersEventStreamId);
            var dictionary = ConvertCollectionToTree(answers);

            var topResult = await ParseTopTwoTestResultIdsAsync(dictionary);

            await PublishEventsAsync(
                Guid.NewGuid(),
                CreateAggregate(command.UserAnswersEventStreamId, topResult).Result());

            return new UserTestResultView(topResult)
                .Some<UserTestResultView, Error>();
        }
        
        private async Task<Guid[]> ParseTopTwoTestResultIdsAsync(Dictionary<Guid, List<Guid>> eventTree)
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

                // in case user's top styles are with the same power,
                // we consider him/her as 'complex personality'
                if (orderedPairs[0].Value.Count == orderedPairs[1].Value.Count)
                {
                    var complexPersonalityResult = await _testResultRepository.GetComplexPersonalityResultAsync();
                    topTestResultIds.Add(complexPersonalityResult.Id);
                    return topTestResultIds.ToArray();
                }

                topTestResultIds.Add(orderedPairs[0].Key);
                topTestResultIds.Add(orderedPairs[1].Key);
            }

            return topTestResultIds.ToArray();
        }

        private static Domain.Entities.UserTestResult CreateAggregate(Guid eventStreamId, Guid[] testResultIds) => 
            new Domain.Entities.UserTestResult(
                eventStreamId,
                _initialPersonalityTestId,
                testResultIds);


        private static Dictionary<Guid, List<Guid>> ConvertCollectionToTree(IEnumerable<Domain.Entities.UserQuestionAnswer> events)
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
    }
}