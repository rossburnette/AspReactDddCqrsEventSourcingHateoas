using System;
using YngStrs.Common.Api.Entities.Core;

namespace YngStrs.Common.Api.Entities
{
    public abstract class BaseDeletableModel<TKey> : BaseModel<TKey>, IDeletableEntity
    {
        public bool IsDeleted { get; set; }

        public DateTimeOffset? DeletedOn { get; set; }
    }
}