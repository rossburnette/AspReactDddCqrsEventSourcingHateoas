using MediatR;

namespace YngStrs.Common.EventSourcing.Core
{
    /// <summary>
    /// Abstraction for event objects.
    /// Inherit from <see cref="INotification"/>, allows the event to be processed.
    /// </summary>
    /// <remarks>
    /// Certain change to the state of an application is captured in an event object
    /// </remarks>
    public interface IEvent : INotification
    {

    }
}