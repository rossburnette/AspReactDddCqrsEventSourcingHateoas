using System.Collections.Generic;
using System.Security.Claims;
using IdentityModel;
using IdentityServer4;
using YngStrs.Identity.Api.AuthContext.Services.Core;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.AuthContext.Services.Business
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