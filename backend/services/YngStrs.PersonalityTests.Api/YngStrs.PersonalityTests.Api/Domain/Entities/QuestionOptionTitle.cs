using System;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question option title data structure.
    /// This is part of the multi-language support.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'question_option_title'.
    /// </remarks>
    public class QuestionOptionTitle
    {
        public Guid Id { get; set; }

        public string Description { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid QuestionOptionId { get; set; }
        public QuestionOption QuestionOption { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}