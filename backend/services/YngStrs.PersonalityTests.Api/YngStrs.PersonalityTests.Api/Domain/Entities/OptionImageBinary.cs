using System;
using System.Collections.Generic;
using YngStrs.Common.Api.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that stores the question option image binary data.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'option_image_binaries'.
    /// </remarks>
    public class OptionImageBinary : RelationalEntity<Guid>
    {
        public string Description { get; set; }

        public string FileName { get; set; }

        public byte[] ImageData { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOption> QuestionOptions { get; set; } = new HashSet<QuestionOption>();
    }
}