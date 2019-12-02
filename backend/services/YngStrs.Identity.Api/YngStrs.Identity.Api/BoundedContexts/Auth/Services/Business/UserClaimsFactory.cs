using System.Collections.Generic;
using System.Security.Claims;
using IdentityModel;
using YngStrs.Identity.Api.BoundedContexts.Auth.Services.Core;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Services.Business
{
    public class UserClaimsFactory : IUserClaimsFactory
    {
        public IEnumerable<Claim> CreateClaimsFor(User user)
        {
            yield return new Claim(JwtClaimTypes.GivenName, user.UserName);

            yield return new Claim("user_id", $"{user.Id}");
        }
    }
}