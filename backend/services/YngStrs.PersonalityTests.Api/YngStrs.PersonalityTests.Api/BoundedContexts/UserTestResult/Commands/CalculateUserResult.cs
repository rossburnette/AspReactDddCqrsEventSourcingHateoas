using System;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.Domain.Views.UserTestResult;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class CalculateUserResult : ICommand<UserTestResultView>
    {
        public Guid UserAnswersEventStreamId { get; set; }
    }
}