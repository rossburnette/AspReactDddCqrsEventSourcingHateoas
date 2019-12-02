using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using YngStrs.Identity.Api.AuthContext.Services.Core;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.AuthContext.Services.Business
{
    public class ProfileService : IProfileService
    {
        private readonly IUserClaimsPrincipalFactory<User> _claimsFactory;
        private readonly UserManager<User> _userManager;
        private readonly IUserClaimsFactory _userClaimsFactory;

        public ProfileService(
            IUserClaimsPrincipalFactory<User> claimsFactory,
            UserManager<User> userManager,
            IUserClaimsFactory userClaimsFactory)
        {
            _claimsFactory = claimsFactory;
            _userManager = userManager;
            _userClaimsFactory = userClaimsFactory;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var subject = context.Subject.GetSubjectId();
            var user = await _userManager.FindByIdAsync(subject);
            var principal = await _claimsFactory.CreateAsync(user);

            var claims = principal.Claims
                .Where(claim => context.RequestedClaimTypes.Contains(claim.Type))
                .Concat(_userClaimsFactory.CreateClaimsFor(user))
                .ToList();

            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var subject = context.Subject.GetSubjectId();
            var user = await _userManager.FindByIdAsync(subject);
            context.IsActive = user != null;
        }
    }
}