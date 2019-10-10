using System;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class QuestionOption
    {
        public Guid OptionId { get; set; }

        public string OptionDescription { get; set; }

        public int QuestionNumber { get; set; }

        public string OptionResult { get; set; }

        public bool IsTextOnly { get; set; }

        public string Base64Image { get; set; }
    }
}