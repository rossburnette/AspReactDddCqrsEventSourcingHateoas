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
        public OptionImageBinary()
        {
            
        }

        public OptionImageBinary(OptionImageBinary imageBinary)
        {
            Id = imageBinary.Id;
            CreatedOn = imageBinary.CreatedOn;
            ModifiedOn = imageBinary.ModifiedOn;
            IsDeleted = imageBinary.IsDeleted;
            DeletedOn = imageBinary.DeletedOn;
            Description = imageBinary.Description;
            FileName = imageBinary.FileName;
            ImageData = imageBinary.ImageData;           
        }

        public string Description { get; set; }

        public string FileName { get; set; }

        public byte[] ImageData { get; set; }

        /// <!--One-To-Many-Relations-->
        public ICollection<QuestionOption> QuestionOptions { get; set; } = new HashSet<QuestionOption>();
    }
}