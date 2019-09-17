// <copyright file="CommandValidator.cs" company="jjSoft Solutions & Co?!">
// Copyright (c) jjSoft Solutions & Co?! All rights reserved.
// </copyright>

using System;
using System.Linq;
using FluentValidation;
using Optional;
using Optional.Extensions;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Common.Cqrs.Business
{
    /// <summary>
    /// Mandatory validator for all commands.
    /// </summary>
    /// <remarks>
    /// Uses the popular .NET library for building strongly-typed validation rules <see cref="FluentValidation"/>.
    /// </remarks>
    /// <typeparam name="TCommand"><see cref="ICommand"/></typeparam>
    public class CommandValidator<TCommand> : ICommandValidator<TCommand>
    {
        private readonly IValidator<TCommand> _validator;

        public CommandValidator(IValidator<TCommand> validator)
        {
            _validator = validator ??
                         throw new InvalidOperationException(
                             "Tried to instantiate a command handler without a validator." +
                             "Did you forget to add one?");
        }

        /// <summary>
        /// Runs the validator.
        /// </summary>
        /// <remarks>
        /// If the validation result is successful, disregard it and simply return the command.
        /// </remarks>
        /// <param name="command"></param>
        /// <returns></returns>
        public Option<TCommand, Error> Validate(TCommand command)
        {
            var validationResult = _validator.Validate(command);

            return validationResult
                .SomeWhen(
                    r => r.IsValid,
                    r => Error.Validation(r.Errors.Select(e => e.ErrorMessage)))
                .Map(_ => command);
        }
    }
}