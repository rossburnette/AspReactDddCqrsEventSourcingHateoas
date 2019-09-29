using System;
using System.Collections.Generic;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test result data structure.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_results'.
    /// </remarks>
    public class TestResult : RelationalEntity<Guid>
    {
        /// <!--Many-To-One-Relations-->
        public Guid PersonalityTestId { get; set; }
        public PersonalityTest PersonalityTest { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<TestResultTitle> TestResultTitles { get; set; } = new HashSet<TestResultTitle>();

        public ICollection<ResultOptionMap> ResultOptionMaps { get; set; } = new HashSet<ResultOptionMap>();
    }
}