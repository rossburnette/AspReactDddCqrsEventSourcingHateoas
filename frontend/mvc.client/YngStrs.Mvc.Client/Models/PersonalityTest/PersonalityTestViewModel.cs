using System.Collections.Generic;
using System.Linq;
using YngStrs.Mvc.Client.Models.TestQuestion;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class PersonalityTestViewModel
    {
        public PersonalityTestViewModel(StructuredTestServiceModel serviceModel)
        {
            FirstQuestion = serviceModel.TestQuestions.First();
            AllButFirstQuestions = serviceModel.TestQuestions.Skip(1).ToList();
        }

        public TestQuestionServiceModel FirstQuestion { get; }

        public List<TestQuestionServiceModel> AllButFirstQuestions { get; }
    }
}