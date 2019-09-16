using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.Common.Hateoas.Tests.Helpers
{
    public class TestResourcePolicy : IPolicy<TestResource>
    {
        public Action<LinksPolicyBuilder<TestResource>> PolicyConfiguration =>
            builder => { builder.RequireSelfLink(); };
    }
}