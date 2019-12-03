using System;
using RiskFirst.Hateoas;
using YngStrs.Common.Hateoas.Core;
using YngStrs.Identity.Api.Controllers;

namespace YngStrs.Identity.Api.Hateoas.Resources.LoginPrinciple
{
    public class LoginResourcePolicy : IPolicy<LoginResource>
    {
        public Action<LinksPolicyBuilder<LoginResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
            policy.RequireRoutedLink(LinkNames.Auth.GetCurrentUser, nameof(UsersController.GetCurrentUser));
            policy.RequireRoutedLink(LinkNames.Auth.Logout, nameof(AuthController.Logout));
        };
    }
}