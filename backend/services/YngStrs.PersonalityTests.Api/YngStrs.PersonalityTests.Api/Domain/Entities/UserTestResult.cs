using System;
using System.Collections.Generic;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a cluster of domain objects (treated as a single unit), which occurs when a user finishes a test.
    /// </summary>
    public class UserTestResult : IAggregate
    {
        public UserTestResult()
        {
            
        }

        public UserTestResult(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }

        public string UserEmail { get; set; }

        /// <!--References-->
        public Guid PersonalityTestId { get; set; }

        public IList<ResultCalculation> TestResultsPercentage { get; set; } = new List<ResultCalculation>();

        /// <!--Events-->
        public UserCompletedTest CompletePersonalityTest() => 
            new UserCompletedTest(PersonalityTestId, UserEmail);

        public void Apply(UserCompletedTest @event)
        {
            Id = Guid.NewGuid();
            UserEmail = @event.UserEmail;
            PersonalityTestId = @event.PersonalityTestId;
            TestResultsPercentage = new List<ResultCalculation>();
        }
    }
}