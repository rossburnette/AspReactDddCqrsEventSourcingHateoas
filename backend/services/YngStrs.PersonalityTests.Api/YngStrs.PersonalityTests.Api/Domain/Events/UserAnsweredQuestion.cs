using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserAnsweredQuestion : IEvent
    {
        public UserAnsweredQuestion(Guid userIdentifier, Guid chosenOptionId, Guid testResultId)
        {
            ChosenOptionId = chosenOptionId;
            TestResultId = testResultId;
            UserIdentifier = userIdentifier;
        }

        /// <summary>
        /// Same as event stream ID.
        /// </summary>
        public Guid UserIdentifier { get; set; }

        public Guid ChosenOptionId { get; set; }

        public Guid TestResultId { get; set; }
    }
}