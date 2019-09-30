using System;
using System.Collections.Generic;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a cluster of domain objects (treated as a single unit),
    /// which occurs when a user finishes a test.
    /// </summary>
    public class UserTestResult : IAggregate
    {
        public UserTestResult(Guid[] testResultsIds)
        {
            TestResultsIds = testResultsIds;
        }

        public UserTestResult(Guid id, Guid[] testResultsIds)
        {
            Id = id;
            TestResultsIds = testResultsIds;
        }

        public Guid Id { get; set; }

        /// <!--References-->
        public Guid PersonalityTestId => Id;

        public Guid[] TestResultsIds { get; set; }

        /// <!--Events-->
        public UserResultCalculated Result() => 
            new UserResultCalculated(PersonalityTestId, TestResultsIds);

        public void Apply(UserResultCalculated @event)
        {
            Id = @event.PersonalityTestId;
            TestResultsIds = @event.TestResultsIds;
        }
    }
}