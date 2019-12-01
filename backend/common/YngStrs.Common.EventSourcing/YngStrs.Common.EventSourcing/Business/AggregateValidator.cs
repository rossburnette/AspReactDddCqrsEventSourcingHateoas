using MediatR;
using Optional;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Common.EventSourcing.Business
{
    public class AggregateValidator : IAggregateValidator
    {
        public Option<Unit, Error> ValidateIdentification(Guid id)
        {
            if (id == Guid.Empty || id == default)
            {
                return Option.None<Unit, Error>(Error.Validation("Invalid Aggregate ID!"));
            }

            return Unit.Value.Some<Unit, Error>();
        }

        public Task<Option<Unit, Error>> ValidateIdentificationAsync(Guid id) =>
            Task.FromResult(ValidateIdentification(id));

        public ValueTask<Option<Unit, Error>> ValidateIdentificationAsValueTask(Guid id) =>
            new ValueTask<Option<Unit, Error>>(ValidateIdentification(id));
    }
}
