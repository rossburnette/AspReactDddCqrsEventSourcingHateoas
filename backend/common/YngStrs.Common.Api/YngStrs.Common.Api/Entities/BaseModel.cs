using System;
using System.ComponentModel.DataAnnotations;
using YngStrs.Common.Api.Entities.Core;

namespace YngStrs.Common.Api.Entities
{
    public abstract class BaseModel<TKey> : IAuditInfo
    {
        [Key]
        public TKey Id { get; set; }

        public DateTimeOffset CreatedOn { get; set; }

        public DateTimeOffset? ModifiedOn { get; set; }
    }
}