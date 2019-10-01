using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserPersonalData
{
    public class UserDataResourcePolicy : IPolicy<UserDataResource>
    {
        public Action<LinksPolicyBuilder<UserDataResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
        };
    }
}