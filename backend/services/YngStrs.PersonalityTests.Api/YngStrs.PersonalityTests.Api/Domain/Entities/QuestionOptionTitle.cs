using System;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question option title data structure.
    /// This is part of the multi-language support.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'question_option_titles'.
    /// </remarks>
    public class QuestionOptionTitle : RelationalEntity<Guid>
    {
        public string Description { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid QuestionOptionId { get; set; }
        public QuestionOption QuestionOption { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}