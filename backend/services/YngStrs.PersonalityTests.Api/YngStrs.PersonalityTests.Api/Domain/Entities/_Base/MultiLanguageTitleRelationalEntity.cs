using System;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities._Base
{
    /// <summary>
    /// Common properties for all 'descriptive' entities, that provides application multi-language.
    /// </summary>
    public abstract class MultiLanguageTitleRelationalEntity : RelationalEntity<Guid>
    {
        public string Description { get; set; }

        /// <!--Many-To-One-Relations-->
        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}