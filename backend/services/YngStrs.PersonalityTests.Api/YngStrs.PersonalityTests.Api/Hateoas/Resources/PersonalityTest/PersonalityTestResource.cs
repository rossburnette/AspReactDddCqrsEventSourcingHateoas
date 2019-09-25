using System;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.PersonalityTest
{
    public class PersonalityTestResource : Resource
    {
        public Guid QuestionId { get; set; }

        public int QuestionNumber { get; set; }

        public Guid OptionId { get; set; }

        public string OptionDescription { get; set; }

        public bool IsTextOnly { get; set; }

        public string Base64Image { get; set; }
    }
}