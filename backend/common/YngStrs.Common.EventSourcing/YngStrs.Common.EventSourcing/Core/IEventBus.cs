using System;
using System.Threading.Tasks;
using MediatR;

namespace YngStrs.Common.EventSourcing.Core
{
    public interface IEventBus
    {
        Task<Unit> PublishAsync<TEvent>(Guid streamId, params TEvent[] events)
            where TEvent : IEvent;
    }
}