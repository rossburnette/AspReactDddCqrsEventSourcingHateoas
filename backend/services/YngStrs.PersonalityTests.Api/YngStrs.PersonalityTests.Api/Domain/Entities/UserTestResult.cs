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

        public IList<ResultCalculation> TestResultPercentages { get; set; } = new List<ResultCalculation>();

        /// <!--Events-->
        public UserCompletedTest CompletePersonalityTest() => 
            new UserCompletedTest(PersonalityTestId, UserEmail);

        public void Apply(UserCompletedTest @event)
        {
            UserEmail = @event.UserEmail;
            PersonalityTestId = @event.PersonalityTestId;
            TestResultPercentages = new List<ResultCalculation>();
        }

        public UserTestResultCalculated BuildConjecturalUserProfile() =>
            new UserTestResultCalculated(UserEmail, PersonalityTestId, TestResultPercentages);

        public void Apply(UserTestResultCalculated @event)
        {
            UserEmail = @event.UserEmail;
            PersonalityTestId = @event.PersonalityTestId;
            TestResultPercentages = @event.TestResultPercentages;
        }
    }
}