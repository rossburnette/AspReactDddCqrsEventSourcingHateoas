using System;
using System.Collections.Generic;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test data structure.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'personality_test'.
    /// </remarks>
    public class PersonalityTest
    {
        public Guid Id { get; set; }

        public string Description { get; set; }

        public bool IsShared { get; set; }


        /// <!--References-->
        public Guid CustomerId { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<TestQuestion> TestQuestions { get; set; }
    }
}