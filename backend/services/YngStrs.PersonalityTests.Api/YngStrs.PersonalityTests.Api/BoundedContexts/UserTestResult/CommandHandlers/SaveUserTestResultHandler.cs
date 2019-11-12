using Marten.Events;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using System;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.CommandHandlers
{
    public class SaveUserTestResultHandler : VoidBaseHandler<SaveUserTestResult>
    {
        public SaveUserTestResultHandler(
            IEventBus eventBus,
            ICommandValidator<SaveUserTestResult> commandValidator)
            : base(eventBus, commandValidator)
        {
        }

        public override async Task<Option<Unit, Error>> HandleAsync(
            SaveUserTestResult command,
            CancellationToken cancellationToken) =>
            (await PublishEventsAsync(
                Guid.NewGuid(),
                new Domain.Entities.UserTestResult(command).SaveResults()))
            .Some<Unit, Error>();
    }
}