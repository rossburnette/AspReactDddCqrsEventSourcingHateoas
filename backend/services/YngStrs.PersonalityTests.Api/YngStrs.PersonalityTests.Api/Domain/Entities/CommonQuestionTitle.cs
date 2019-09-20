using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Entities._Base;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    public class CommonQuestionTitle : MultiLanguageTitleRelationalEntity
    {
        /// <!--One-To-Many-Relations-->
        public ICollection<TestQuestionTitle> TestQuestionTitles { get; set; } =
            new HashSet<TestQuestionTitle>();
    }
}