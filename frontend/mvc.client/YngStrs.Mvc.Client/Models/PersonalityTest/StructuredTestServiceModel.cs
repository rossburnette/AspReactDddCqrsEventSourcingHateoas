using System.Collections.Generic;
using YngStrs.Mvc.Client.Models.TestQuestion;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class StructuredTestServiceModel
    {
        public List<TestQuestionServiceModel> TestQuestions { get; set; }
    }
}