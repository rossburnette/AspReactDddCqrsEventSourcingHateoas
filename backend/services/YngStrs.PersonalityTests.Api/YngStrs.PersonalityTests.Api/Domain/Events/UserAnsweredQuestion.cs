using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserAnsweredQuestion : IEvent
    {
        public UserAnsweredQuestion(Guid chosenOptionId, Guid testResultId)
        {
            ChosenOptionId = chosenOptionId;
            TestResultId = testResultId;
        }

        public Guid ChosenOptionId { get; set; }

        public Guid TestResultId { get; set; }
    }
}