// <copyright file="TypedBaseHandler.cs" company="jjSoft Solutions & Co?!">
// Copyright (c) jjSoft Solutions & Co?! All rights reserved.
// </copyright>

using System.Threading;
using System.Threading.Tasks;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Common.Cqrs.Business
{
    /// <summary>
    /// Ready to use handler, that would return either <see cref="TResult"/> or <see cref="Error"/>.
    /// </summary>
    /// <typeparam name="TCommand"><see cref="ICommand{TResult}"/></typeparam>
    /// <typeparam name="TResult"></typeparam>
    public abstract class TypedBaseHandler<TCommand, TResult> : BaseHandler, ICommandHandler<TCommand, TResult>
        where TCommand : ICommand<TResult>
    {
        protected TypedBaseHandler(
            IEventBus eventBus,
            ICommandValidator<TCommand> validator)
            : base(eventBus)
        {
            CommandValidator = validator;
        }

        protected ICommandValidator<TCommand> CommandValidator { get; }

        /// <summary>
        ///  The first method to be called.
        ///  Validates the command and then dispatches it to the implementation of the relevant handler.
        /// </summary>
        /// <param name="request"></param>
        /// <param name="cancellationToken"></param>
        /// <returns><see cref="TResult"/> or <see cref="Error"/></returns>
        public Task<Option<TResult, Error>> Handle(TCommand request, CancellationToken cancellationToken) =>
            CommandValidator
                .Validate(request)
                .FlatMapAsync(validCmd => HandleAsync(validCmd, cancellationToken));

        /// <summary>
        /// This method must be implemented in the relevant command handler.
        /// </summary>
        public abstract Task<Option<TResult, Error>> HandleAsync(TCommand command, CancellationToken cancellationToken);
    }
}