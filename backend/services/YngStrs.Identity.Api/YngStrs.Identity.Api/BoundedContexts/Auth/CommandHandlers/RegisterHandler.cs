using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Business;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.Domain.Entities;
using YngStrs.Identity.Api.Domain.Repositories;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.CommandHandlers
{
    public class RegisterHandler : VoidBaseHandler<Register>
    {
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;

        public RegisterHandler(
            IEventBus eventBus,
            ICommandValidator<Register> commandValidator,
            IMapper mapper,
            IUserRepository userRepository)
            : base(eventBus, commandValidator)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public override Task<Option<Unit, Error>> HandleAsync(
            Register command,
            CancellationToken cancellationToken) =>
            EnsureUserDoesntExistAsync(command.Email).FlatMapAsync(_ =>
            PersistUserAsync(command));

        private Task<Option<Unit, Error>> PersistUserAsync(Register command)
        {
            var user = _mapper.Map<User>(command);
            return _userRepository.Register(user, command.Password);
        }

        private async Task<Option<bool, Error>> EnsureUserDoesntExistAsync(string email)
        {
            var user = await _userRepository.GetByEmail(email);

            return user
                .HasValue
                .SomeWhen(x => x == false, Error.Conflict($"User with email {email} already exists."));
        }
    }
}