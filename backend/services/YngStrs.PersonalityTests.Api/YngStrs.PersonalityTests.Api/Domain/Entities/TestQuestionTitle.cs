using System;
using YngStrs.Common.Api.Entities;
using YngStrs.PersonalityTests.Api.Domain.Entities._Base;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines mapping
    /// between <see cref="TestQuestion"/> and <see cref="CommonQuestionTitle"/>.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'test_question_titles'.
    /// </remarks>
    public class TestQuestionTitle : RelationalEntity<Guid>
    {
        /// <!--Many-To-One-Relations-->
        public Guid TestQuestionId { get; set; }
        public TestQuestion TestQuestion { get; set; }

        public Guid CommonQuestionTitleId { get; set; }
        public CommonQuestionTitle CommonQuestionTitle { get; set; }
    }
}