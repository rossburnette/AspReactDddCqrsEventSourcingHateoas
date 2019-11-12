using System;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class SaveUserTestAnswers : PersonalityTestBindingModel
    {
        public SaveUserTestAnswers(PersonalityTestBindingModel bindingModel, Guid userIdentifier)
        {
            TestStats = bindingModel.TestStats;
            TestAnswers = bindingModel.TestAnswers;
            UserIdentifier = userIdentifier;
        }

        public Guid UserIdentifier { get; set; }
    }
}