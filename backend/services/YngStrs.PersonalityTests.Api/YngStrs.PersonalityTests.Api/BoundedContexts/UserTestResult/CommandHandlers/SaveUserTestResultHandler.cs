using MediatR;
using Optional;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;

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

        public override Task<Option<Unit, Error>> HandleAsync(SaveUserTestResult command, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}