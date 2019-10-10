using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Chatbot.Api.BoundedContexts.UserPersonalData.Commands;
using YngStrs.Chatbot.Api.Extensions;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserPersonalData.CommandHandlers
{
    public class ProcessNecessaryDataHandler : VoidBaseHandler<ProcessNecessaryData>
    {
        /// <summary />
        /// <param name="eventBus"></param>
        /// <param name="commandValidator"></param>
        public ProcessNecessaryDataHandler(
            IEventBus eventBus,
            ICommandValidator<ProcessNecessaryData> commandValidator)
            : base(eventBus, commandValidator)
        {
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            ProcessNecessaryData command,
            CancellationToken cancellationToken) =>
            ParseRawDataToAggregate(command).MapAsync(aggregate =>
            PublishEventsAsync(Guid.NewGuid(), aggregate.SubmitNecessaryData()));

        private static Task<Option<Domain.Entities.UserPersonalData, Error>> ParseRawDataToAggregate(
            ProcessNecessaryData command)
        {
            var name = command.RawData.GetStringBetween("name=", "&email");
            var email = command.RawData.GetStringBetween("&email", "&hr-checkbox");

            if (name == string.Empty)
            {
                return Task.FromResult(
                    Option.None<Domain.Entities.UserPersonalData, Error>(
                        Error.Validation($"Cannot parse user's name from: {command.RawData}")));
            }

            if (email == string.Empty)
            {
                return Task.FromResult(
                    Option.None<Domain.Entities.UserPersonalData, Error>(
                        Error.Validation($"Cannot parse user's email from: {command.RawData}")));
            }

            var aggregate = new Domain.Entities.UserPersonalData(command.EventStreamId, email, name);

            return Task.FromResult(aggregate.Some<Domain.Entities.UserPersonalData, Error>());
        }
    }
}