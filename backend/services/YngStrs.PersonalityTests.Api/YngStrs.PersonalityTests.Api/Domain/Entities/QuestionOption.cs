using System;
using System.Collections.Generic;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question option .
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'question_options'.
    /// </remarks>
    public class QuestionOption : RelationalEntity<Guid>
    {
        public bool IsTextOnly { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid TestQuestionId { get; set; }
        public TestQuestion TestQuestion { get; set; }

        public Guid? OptionImageBinaryId { get; set; }
        public OptionImageBinary OptionImageBinary { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOptionTitle> QuestionOptionTitles { get; set; } = new HashSet<QuestionOptionTitle>();

        public ICollection<ResultOptionMap> ResultOptionMaps { get; set; } = new HashSet<ResultOptionMap>();
    }
}