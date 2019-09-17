// <copyright file="VoidBaseHandler.cs" company="jjSoft Solutions & Co?!">
// Copyright (c) jjSoft Solutions & Co?! All rights reserved.
// </copyright>

using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Common.Cqrs.Business
{
    /// <summary>
    /// Ready to use handler, that would return either <see cref="Unit"/> or <see cref="Error"/>.
    /// </summary>
    /// <typeparam name="TCommand"><see cref="ICommand"/></typeparam>
    public abstract class VoidBaseHandler<TCommand> : BaseHandler, ICommandHandler<TCommand>
        where TCommand : ICommand
    {
        protected VoidBaseHandler(
            IEventBus eventBus,
            ICommandValidator<TCommand> commandValidator)
            : base(eventBus)
        {
            CommandValidator = commandValidator;
        }

        protected ICommandValidator<TCommand> CommandValidator { get; }

        /// <summary>
        ///  The first method to be called.
        ///  Validates the command and then dispatches it to the implementation of the relevant handler.
        /// </summary>
        /// <param name="command"></param>
        /// <param name="cancellationToken"></param>
        /// <returns>Void or error.</returns>
        public Task<Option<Unit, Error>> Handle(TCommand command, CancellationToken cancellationToken) =>
            CommandValidator
                .Validate(command)
                .FlatMapAsync(validCmd => HandleAsync(validCmd, cancellationToken));

        /// <summary>
        /// This method must be implemented in the relevant command handler.
        /// </summary>
        public abstract Task<Option<Unit, Error>> HandleAsync(TCommand command, CancellationToken cancellationToken);
    }
}