

using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Commands
{
    public class Register : ICommand
    {
        public string Email { get; set; }

        public string Password { get; set; }
    }
}