using System;

namespace YngStrs.Common.EventSourcing.Core
{
    public interface IAggregate
    {
        Guid Id { get; set; }
    }
}