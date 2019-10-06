using System;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Views.QuestionOptions
{
    public class QuestionOptionView
    {
        /// <summary>
        /// <see cref="QuestionOption"/> ID.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// <see cref="QuestionOptionTitle"/> Description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// <see cref="TestQuestion.SerialNumber"/>.
        /// </summary>
        public int QuestionNumber { get; set; }

        /// <summary>
        /// <see cref="TestResult.Value"/>.
        /// </summary>
        public string ResultValue { get; set; }

        /// <summary>
        /// <see cref="QuestionOption.IsTextOnly"/>.
        /// </summary>
        public bool IsTextOnly { get; set; }

        /// <summary>
        /// <see cref="OptionImageBinary.ImageData"/> converted to Base64 string.
        /// </summary>
        public string Base64Image { get; set; }
    }
}