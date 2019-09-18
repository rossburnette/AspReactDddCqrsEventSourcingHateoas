using System;
using System.Collections.Generic;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question option data structure.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'question_option'.
    /// </remarks>
    public class QuestionOption
    {
        public Guid Id { get; set; }

        public bool IsTextOnly { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid TestQuestionId { get; set; }
        public TestQuestion TestQuestion { get; set; }

        public Guid? OptionImageBinaryId { get; set; }
        public OptionImageBinary OptionImageBinary { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOptionTitle> QuestionOptionTitles { get; set; }
    }
}