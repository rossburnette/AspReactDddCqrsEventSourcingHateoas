using System;
using System.Collections.Generic;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Abstract data model that stores the question option image binary data.
    /// </summary>
    /// <remarks>
    /// Stored in the relationship database as 'option_image_binary'.
    /// </remarks>
    public class OptionImageBinary
    {
        public Guid Id { get; set; }

        public byte[] ImageData { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOption> QuestionOptions { get; set; }
    }
}