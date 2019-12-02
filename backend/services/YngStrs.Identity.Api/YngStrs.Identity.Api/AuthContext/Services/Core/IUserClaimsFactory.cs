using System.Collections.Generic;
using System.Security.Claims;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.AuthContext.Services.Core
{
    public interface IUserClaimsFactory
    {
        IEnumerable<Claim> CreateClaimsFor(User user);
    }
}