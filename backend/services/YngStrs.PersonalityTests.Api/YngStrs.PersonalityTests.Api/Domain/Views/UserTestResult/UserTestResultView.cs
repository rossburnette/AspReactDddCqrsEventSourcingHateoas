using System;

namespace YngStrs.PersonalityTests.Api.Domain.Views.UserTestResult
{
    public class UserTestResultView
    {
        public UserTestResultView(Guid[] testResultIds)
        {
            TestResultIds = testResultIds;
        }

        public Guid[] TestResultIds { get; set; }
    }
}