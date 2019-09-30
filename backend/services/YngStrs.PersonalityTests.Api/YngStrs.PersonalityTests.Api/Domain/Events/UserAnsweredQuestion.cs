using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserAnsweredQuestion : IEvent
    {
        public UserAnsweredQuestion(Guid chosenOptionId, string resultValue)
        {
            ChosenOptionId = chosenOptionId;
            ResultValue = resultValue;
        }

        public Guid ChosenOptionId { get; set; }

        public string ResultValue { get; set; }
    }
}