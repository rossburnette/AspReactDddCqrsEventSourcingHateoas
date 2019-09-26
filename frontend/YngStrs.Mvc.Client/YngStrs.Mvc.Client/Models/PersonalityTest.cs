using System;

namespace YngStrs.Mvc.Client.Models
{
    public class PersonalityTest
    {
        public Guid QuestionId { get; set; }

        public int QuestionNumber { get; set; }

        public Guid OptionId { get; set; }

        public string OptionDescription { get; set; }

        public bool IsTextOnly { get; set; }

        public string Base64Image { get; set; }
    }
}