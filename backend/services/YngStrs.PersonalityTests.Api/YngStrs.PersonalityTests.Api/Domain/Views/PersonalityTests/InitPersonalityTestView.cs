using System;

namespace YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests
{
    public class InitPersonalityTestView
    {
        public Guid QuestionId { get; set; }

        public int QuestionNumber { get; set; }

        public Guid OptionId { get; set; }

        public string OptionDescription { get; set; }

        public string OptionResult { get; set; }

        public bool IsTextOnly { get; set; }

        public string Base64Image { get; set; }
    }
}