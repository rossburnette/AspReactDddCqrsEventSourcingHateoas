using Marten.Events;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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
        private static readonly Guid InitialPersonalityTestId = Guid.Parse("00ff378b-c5e4-4933-81f4-52bc84f2ca9c");

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

        public override Task<Option<UserTestResultView, Error>> HandleAsync(
            CalculateUserResult command,
            CancellationToken cancellationToken) =>
            EnsureEventStreamExistsAsync(command).FlatMapAsync(_ =>
            EnsureNoResultForUserAsync(command).FlatMapAsync(__ =>
            GetAnswersByStreamAsync(command).FlatMapAsync(answers =>
            ParseResultAsync(answers).FlatMapAsync(topResults =>
            SaveUserTestResultAsync(command, topResults).MapAsync(___ =>
            Task.FromResult(new UserTestResultView(topResults)))))));
        private static Dictionary<Guid, List<Guid>> ConvertCollectionToTree(
            IEnumerable<Domain.Entities.UserQuestionAnswer> events)
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

        private static Domain.Entities.UserTestResult CreateAggregate(
            Guid eventStreamId,
            Guid[] testResultIds) =>
            new Domain.Entities.UserTestResult(
                personalityTestId: InitialPersonalityTestId,
                userIdentifier: eventStreamId,
                testResultsIds: testResultIds);

        private Task<Option<StreamState, Error>> EnsureEventStreamExistsAsync(
            CalculateUserResult command) =>
            _answerRepository.GetUserAnswerEventStreamByIdAsync(command.UserAnswersEventStreamId);

        private async Task<Option<Unit, Error>> EnsureNoResultForUserAsync(
            CalculateUserResult command) =>
            (await _userTestResultRepository
            .GetByUserAndTestAsync(
                command.UserAnswersEventStreamId,
                InitialPersonalityTestId))
            .SomeWhen(
                predicate: result => result == default,
                exception: Error.Conflict($"There is already a reported result for user stream ID: {command.UserAnswersEventStreamId}."))
            .Map(_ => Unit.Value);

        private async Task<Option<IReadOnlyList<Domain.Entities.UserQuestionAnswer>, Error>> GetAnswersByStreamAsync(
            CalculateUserResult command) =>
            (await _answerRepository.GetAnswersByUserStreamAsync(command.UserAnswersEventStreamId))
            .SomeWhen(list => list.Any(), Error.NotFound($"No user answers found for stream ID: {command.UserAnswersEventStreamId}."));

        private async Task<Option<Guid[], Error>> ParseResultAsync(
            IEnumerable<Domain.Entities.UserQuestionAnswer> answers)
        {
            var dictionary = ConvertCollectionToTree(answers);
            var topResult = await ParseTopTwoTestResultIdsAsync(dictionary);
            return topResult.Some<Guid[], Error>();
        }

        private Task<Option<Unit, Error>> SaveUserTestResultAsync(
            CalculateUserResult command,
            Guid[] topResult) =>
            PublishEventsAsync(
                    Guid.NewGuid(),
                    CreateAggregate(command.UserAnswersEventStreamId, topResult).Result())
                .SomeNotNullAsync(
                    Error.Critical("Something wend wrong while persisting the data in the event store!"));
        private async Task<Guid[]> ParseTopTwoTestResultIdsAsync(
            Dictionary<Guid, List<Guid>> eventTree)
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
    }
}