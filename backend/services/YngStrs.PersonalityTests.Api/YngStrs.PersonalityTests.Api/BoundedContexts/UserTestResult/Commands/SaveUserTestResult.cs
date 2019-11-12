using System;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class SaveUserTestResult : ICommand
    {
        public TestResultStatistics TestStats { get; set; }

        public UserAnswersCollection TestAnswers { get; set; }

        public Guid UserIdentifier { get; set; }
    }
}