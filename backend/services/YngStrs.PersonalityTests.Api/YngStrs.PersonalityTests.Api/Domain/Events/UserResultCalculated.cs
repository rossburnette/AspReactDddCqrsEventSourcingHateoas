using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserResultCalculated : IEvent
    {
        public UserResultCalculated(Guid userIdentifier, Guid personalityTestId, Guid[] testResultsIds)
        {
            PersonalityTestId = personalityTestId;
            TestResultsIds = testResultsIds;
            UserIdentifier = userIdentifier;
        }

        /// <summary>
        /// Same as event stream ID.
        /// </summary>
        public Guid UserIdentifier { get; set; }

        public Guid PersonalityTestId { get; set; }

        public Guid[] TestResultsIds { get; set; }
    }
}