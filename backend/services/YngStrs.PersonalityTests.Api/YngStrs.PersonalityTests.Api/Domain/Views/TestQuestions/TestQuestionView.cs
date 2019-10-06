using System;
using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Views.QuestionOptions;

namespace YngStrs.PersonalityTests.Api.Domain.Views.TestQuestions
{
    public class TestQuestionView
    {
        public TestQuestionView(Guid id, List<QuestionOptionView> options)
        {
            Id = id;
            Options = options;
        }

        /// <summary>
        /// <see cref="TestQuestion"/> ID.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Parsed <see cref="QuestionOption"/>.
        /// </summary>
        public List<QuestionOptionView> Options { get; set; }
    }
}