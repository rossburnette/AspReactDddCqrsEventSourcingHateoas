using System;
using System.Collections.Generic;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question data structure.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_question'.
    /// </remarks>
    public class TestQuestion
    {
        public Guid Id { get; set; }

        public int SerialNumber { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid PersonalityTestId { get; set; }
        public PersonalityTest PersonalityTest { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOption> QuestionOptions { get; set; }

        public ICollection<TestQuestionTitle> TestQuestionTitles { get; set; }
    }
}