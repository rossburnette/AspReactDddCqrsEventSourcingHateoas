using System;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question title data structure.
    /// This is part of the multi-language support.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_question_titles'.
    /// </remarks>
    public class TestQuestionTitle : RelationalEntity<Guid>
    {
        public string Description { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid TestQuestionId { get; set; }
        public TestQuestion TestQuestion { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}