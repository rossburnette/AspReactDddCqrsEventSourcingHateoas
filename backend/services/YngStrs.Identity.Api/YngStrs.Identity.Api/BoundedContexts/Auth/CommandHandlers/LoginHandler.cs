using System.Threading;
using System.Threading.Tasks;
using IdentityServer4;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.BoundedContexts.Auth.Services.Core;
using YngStrs.Identity.Api.Domain.Entities;
using YngStrs.Identity.Api.Domain.Repositories;
using YngStrs.Identity.Api.Domain.Views;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.CommandHandlers
{
    public class LoginHandler : TypedBaseHandler<Login, JwtView>
    {
        private readonly IUserRepository _userRepository;
        private readonly IdentityServerTools _identityServerTools;
        private readonly IUserClaimsFactory _userClaimsFactory;

        public LoginHandler(
            IEventBus eventBus,
            ICommandValidator<Login> validator,
            IUserRepository userRepository,
            IdentityServerTools identityServerTools,
            IUserClaimsFactory userClaimsFactory)
            : base(eventBus, validator)
        {
            _userRepository = userRepository;
            _identityServerTools = identityServerTools;
            _userClaimsFactory = userClaimsFactory;
        }

        public override Task<Option<JwtView, Error>> HandleAsync(
            Login command,
            CancellationToken cancellationToken) =>
            FindUserAsync(command.Email).FlatMapAsync(user =>
            CheckPasswordAsync(user, command.Password).MapAsync(_ =>
            GenerateJwtAsync(user)));

        private Task<Option<User, Error>> FindUserAsync(string email) =>
            _userRepository.GetByEmail(email);

        private async Task<Option<bool, Error>> CheckPasswordAsync(User user, string password)
        {
            var passwordIsValid = await _userRepository.CheckPassword(user, password);

            var result = passwordIsValid
                .SomeWhen(
                    isValid => isValid,
                    Error.Unauthorized("Invalid credentials."));

            return result;
        }

        private async Task<JwtView> GenerateJwtAsync(User user)
        {
            var claims = _userClaimsFactory.CreateClaimsFor(user);

            var jwt = await _identityServerTools.IssueJwtAsync(100, claims);

            return new JwtView(jwt);
        }
    }
}