using System;
using RiskFirst.Hateoas;

namespace YngStrs.Common.Hateoas.Core
{
    public interface IPolicy<TResource>
        where TResource : Resource
    {
        Action<LinksPolicyBuilder<TResource>> PolicyConfiguration { get; }
    }
}