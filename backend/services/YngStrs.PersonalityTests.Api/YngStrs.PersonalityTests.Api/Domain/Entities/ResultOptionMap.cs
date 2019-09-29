using System;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines mapping between
    /// <see cref="TestResult"/> and <see cref="QuestionOption"/>.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'result_option_maps'.
    /// </remarks>
    public class ResultOptionMap : RelationalEntity<Guid>
    {
        /// <!--Many-To-One-Relations-->
        public Guid QuestionOptionId { get; set; }
        public QuestionOption QuestionOption { get; set; }

        public Guid TestResultId { get; set; }
        public TestResult TestResult { get; set; }
    }
}