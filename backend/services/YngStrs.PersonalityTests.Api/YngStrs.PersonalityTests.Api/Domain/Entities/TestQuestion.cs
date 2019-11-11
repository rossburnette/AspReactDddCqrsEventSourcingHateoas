using System;
using System.Collections.Generic;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question .
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_questions'.
    /// </remarks>
    public class TestQuestion : RelationalEntity<Guid>
    {
        public int SerialNumber { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid PersonalityTestId { get; set; }
        public PersonalityTest PersonalityTest { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOption> QuestionOptions { get; set; } = new HashSet<QuestionOption>();

        public ICollection<TestQuestionTitle> TestQuestionTitles { get; set; } = new HashSet<TestQuestionTitle>();
    }
}