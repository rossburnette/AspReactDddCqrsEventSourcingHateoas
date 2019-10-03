using RiskFirst.Hateoas;
using System;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserTestResult
{
    public class UserTestResultResourcePolicy : IPolicy<UserTestResultResource>
    {
        public Action<LinksPolicyBuilder<UserTestResultResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
        };
    }
}