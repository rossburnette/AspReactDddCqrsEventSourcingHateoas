using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class CalculateUserResult : ICommand<Guid[]>
    {
        public Guid UserAnswersEventStreamId { get; set; }
    }
}