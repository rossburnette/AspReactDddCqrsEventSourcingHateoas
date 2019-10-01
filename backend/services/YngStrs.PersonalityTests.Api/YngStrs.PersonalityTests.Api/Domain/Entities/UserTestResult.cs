using System;
using YngStrs.Common.EventSourcing.Core;
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

        public UserTestResult(Guid personalityTestId, Guid userIdentifier, Guid[] testResultsIds)
        {
            Id = Guid.NewGuid();
            PersonalityTestId = personalityTestId;
            UserIdentifier = userIdentifier;
            TestResultsIds = testResultsIds;
        }

        public Guid Id { get; set; }

        /// <remarks>
        /// Same as <see cref="UserAnsweredQuestion"/> event stream!
        /// </remarks>
        public Guid UserIdentifier { get; set; }

        /// <!--References-->
        /// <summary>
        /// <see cref="PersonalityTest"/> identifier (ID).
        /// </summary>
        public Guid PersonalityTestId { get; set; }

        /// <summary>
        /// Identifiers of <see cref="TestResult"/> that describe user personality.
        /// </summary>
        public Guid[] TestResultsIds { get; set; }

        /// <!--Events-->
        public UserResultCalculated Result() => 
            new UserResultCalculated(UserIdentifier, PersonalityTestId, TestResultsIds);

        public void Apply(UserResultCalculated @event)
        {
            Id = Guid.NewGuid();
            UserIdentifier = @event.UserIdentifier;
            PersonalityTestId = @event.PersonalityTestId;
            TestResultsIds = @event.TestResultsIds;
        }
    }
}