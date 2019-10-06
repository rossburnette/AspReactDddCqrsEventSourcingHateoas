using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Entities._Base;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the personality test question -> title data structure.
    /// This is part of the multi-language support.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'common_question_title'.
    /// </remarks>
    public class CommonQuestionTitle : MultiLanguageTitleRelationalEntity
    {
        /// <!--One-To-Many-Relations-->
        public ICollection<TestQuestionTitle> TestQuestionTitles { get; set; } =
            new HashSet<TestQuestionTitle>();
    }
}