using System;

namespace YngStrs.Common.Api.Entities.Core
{
    public interface IDeletableEntity
    {
        bool IsDeleted { get; set; }

        DateTimeOffset? DeletedOn { get; set; }
    }
}