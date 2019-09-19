using System;
using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserTestResultCalculated
    {
        public UserTestResultCalculated(
            string userEmail,
            Guid personalityTestId,
            IList<ResultCalculation> testResultPercentages)
        {
            UserEmail = userEmail;
            PersonalityTestId = personalityTestId;
            TestResultPercentages = testResultPercentages;
        }

        public string UserEmail { get; set; }

        public Guid PersonalityTestId { get; set; }

        public IList<ResultCalculation> TestResultPercentages { get; set; }
    }
}