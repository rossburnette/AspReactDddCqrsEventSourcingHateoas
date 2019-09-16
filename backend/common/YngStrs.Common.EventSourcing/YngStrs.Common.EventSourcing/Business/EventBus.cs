// <copyright file="EventBus.cs" company="jjSoft Solutions & Co?!">
// Copyright (c) jjSoft Solutions & Co?! All rights reserved.
// </copyright>

using System;
using System.Threading.Tasks;
using Marten;
using MediatR;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Common.EventSourcing.Business
{
    /// <inheritdoc />
    public class EventBus : IEventBus
    {
        private readonly IMediator _mediator;
        private readonly IDocumentSession _session;

        public EventBus(IMediator mediator, IDocumentSession session)
        {
            _mediator = mediator;
            _session = session;
        }

        /// <summary>
        /// Saves the events in the database and sends the notification message (<see cref="IEvent"/>).
        /// </summary>
        /// <typeparam name="TEvent"></typeparam>
        /// <param name="streamId"></param>
        /// <param name="events"></param>
        /// <returns>Void</returns>
        public async Task<Unit> PublishAsync<TEvent>(Guid streamId, params TEvent[] events)
            where TEvent : IEvent
        {
            foreach (var @event in events)
            {

                _session.Events.Append(streamId, @event);
                await _mediator.Publish(@event);
            }

            await _session.SaveChangesAsync();
            return Unit.Value;
        }
    }
}