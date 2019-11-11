using System;
using System.Collections.Generic;
using YngStrs.Common.Api;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that defines the application language .
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'languages'.
    /// </remarks>
    public class Language : RelationalEntity<Guid>
    {
        public string EnglishName { get; set; }

        public string NativeName { get; set; }

        /// <!--External References-->
        public ProjectLanguages EnumValue { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<TestResultTitle> TestResultTitles { get; set; }
            = new HashSet<TestResultTitle>();

        public ICollection<QuestionOptionTitle> QuestionOptionTitles { get; set; }
            = new HashSet<QuestionOptionTitle>();

        public ICollection<CommonQuestionTitle> CommonQuestionTitles { get; set; }
            = new HashSet<CommonQuestionTitle>();
    }
}