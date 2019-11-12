using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents <see cref="TestResult"/> which the user received after made <see cref="PersonalityTest"/>.
    /// Technically, it is a domain object:
    /// 1) Considered as event sourced aggregate!
    /// 2) Linked with the event - User finished test!
    /// </summary>
    public class UserTestResult : IAggregate
    {
        public UserTestResult()
        {
        }

        public UserTestResult(SaveUserTestResult command)
        {
            UserIdentifier = command.UserIdentifier;
            ResultStatistics = command.TestStats;
            AnswersCollection = command.TestAnswers;
        }

        public Guid Id { get; set; }

        /// <remarks>
        /// Same as <see cref="UserAnsweredQuestion"/> event stream!
        /// </remarks>
        public Guid UserIdentifier { get; set; }

        public TestResultStatistics ResultStatistics { get; set; }

        public UserAnswersCollection AnswersCollection { get; set; }

        /// <!--Events-->
        public UserResultSaved SaveResults() =>
            new UserResultSaved(ResultStatistics, AnswersCollection, UserIdentifier);

        public void Apply(UserResultSaved @event)
        {
            Id = Guid.NewGuid();
            ResultStatistics = @event.ResultStatistics;
            AnswersCollection = @event.AnswersCollection;
            UserIdentifier = @event.UserIdentifier;
        }
    }
}