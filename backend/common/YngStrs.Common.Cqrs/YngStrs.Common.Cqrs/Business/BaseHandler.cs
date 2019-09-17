// <copyright file="BaseHandler.cs" company="jjSoft Solutions & Co?!">
// Copyright (c) jjSoft Solutions & Co?! All rights reserved.
// </copyright>

using System;
using System.Threading.Tasks;
using MediatR;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Common.Cqrs.Business
{
    public abstract class BaseHandler
    {
        protected BaseHandler(IEventBus eventBus)
        {
            EventBus = eventBus;
        }

        protected IEventBus EventBus { get; }

        protected Task<Unit> PublishEventsAsync(Guid streamId, params IEvent[] events) =>
            EventBus.PublishAsync(streamId, events);
    }
}