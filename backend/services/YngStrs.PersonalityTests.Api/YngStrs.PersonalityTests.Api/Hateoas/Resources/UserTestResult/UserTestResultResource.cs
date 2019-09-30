using System;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserTestResult
{
    public class UserTestResultResource : Resource
    {
        public Guid[] TestResultIds { get; set; }

    }
}