﻿using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.PersonalityTest
{
    public class TestContainerResourcePolicy : IPolicy<PersonalityTestContainerResource>
    {
        public Action<LinksPolicyBuilder<PersonalityTestContainerResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
        };
    }
}