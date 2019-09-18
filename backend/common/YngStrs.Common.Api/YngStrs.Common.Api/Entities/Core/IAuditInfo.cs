using System;

namespace YngStrs.Common.Api.Entities.Core
{
    public interface IAuditInfo
    {
        DateTimeOffset CreatedOn { get; set; }

        DateTimeOffset? ModifiedOn { get; set; }
    }
}