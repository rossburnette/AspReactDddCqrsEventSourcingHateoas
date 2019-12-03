using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;
using YngStrs.Identity.Api.Controllers;

namespace YngStrs.Identity.Api.Hateoas.Resources.LogoutPrinciple
{
    public class LogoutResourcePolicy : IPolicy<LogoutResource>
    {
        public Action<LinksPolicyBuilder<LogoutResource>> PolicyConfiguration => policy =>
        {
            policy.RequireRoutedLink(LinkNames.Auth.Login, nameof(AuthController.Login));
            policy.RequireRoutedLink(LinkNames.Auth.Register, nameof(AuthController.Register));
        };
    }
}