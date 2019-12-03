using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;
using YngStrs.Identity.Api.Controllers;

namespace YngStrs.Identity.Api.Hateoas.Resources.RegisterPrinciple
{
    public class RegisterResourcePolicy : IPolicy<RegisterResource>
    {
        public Action<LinksPolicyBuilder<RegisterResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
            policy.RequireRoutedLink(LinkNames.Auth.Login, nameof(AuthController.Login));
        };
    }
}