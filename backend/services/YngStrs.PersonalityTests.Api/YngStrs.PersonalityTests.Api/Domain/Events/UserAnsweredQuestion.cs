using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserAnsweredQuestion : IEvent
    {
        public UserAnsweredQuestion(Guid chosenOptionId, string optionValue)
        {
            ChosenOptionId = chosenOptionId;
            OptionValue = optionValue;
        }

        public Guid ChosenOptionId { get; set; }

        public string OptionValue { get; set; }
    }
}