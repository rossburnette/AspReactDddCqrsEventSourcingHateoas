using System;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class RegisterUserAnswerModel
    {
        public RegisterUserAnswerModel(Guid eventStreamId, Guid chosenOptionId)
        {
            EventStreamId = eventStreamId;
            ChosenOptionId = chosenOptionId;
        }

        public Guid EventStreamId { get; set; }

        public Guid ChosenOptionId { get; set; }
    }
}