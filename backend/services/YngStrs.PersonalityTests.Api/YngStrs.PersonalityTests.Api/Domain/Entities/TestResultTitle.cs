using System;
using YngStrs.PersonalityTests.Api.Domain.Entities._Base;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test result -> title data structure.
    /// This is part of the multi-language support.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_result_titles'.
    /// </remarks>
    public class TestResultTitle : MultiLanguageTitleRelationalEntity
    {
        /// <!--Many-To-One-Relations-->
        public Guid TestResultId { get; set; }
        public TestResult TestResult { get; set; }
    }
}