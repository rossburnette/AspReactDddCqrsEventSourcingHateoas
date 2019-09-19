using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserCompletedTest : IEvent
    {
        public UserCompletedTest(Guid personalityTestId, string userEmail)
        {
            PersonalityTestId = personalityTestId;
            UserEmail = userEmail;
        }

        public Guid PersonalityTestId { get; set; }

        public string UserEmail { get; set; }

    }
}