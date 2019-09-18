using System;
using System.Collections.Generic;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test data structure.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'personality_tests'.
    /// </remarks>
    public class PersonalityTest : RelationalEntity<Guid>
    {
        public string Description { get; set; }

        public bool IsShared { get; set; }


        /// <!--External References-->
        public Guid CustomerId { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<TestQuestion> TestQuestions { get; set; }
    }
}