using System;

namespace YngStrs.Common.EventSourcing.Core
{
    /// <summary>
    /// Domain concept (mostly cluster of domain objects), treated as a single unit.
    /// </summary>
    public interface IAggregate
    {
        Guid Id { get; set; }
    }
}