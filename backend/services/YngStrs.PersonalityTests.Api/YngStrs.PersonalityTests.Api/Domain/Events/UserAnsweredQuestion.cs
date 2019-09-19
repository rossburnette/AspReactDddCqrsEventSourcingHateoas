using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserAnsweredQuestion : IEvent
    {
        public UserAnsweredQuestion(Guid chosenOptionId)
        {
            ChosenOptionId = chosenOptionId;
        }

        public Guid ChosenOptionId { get; set; }
    }
}