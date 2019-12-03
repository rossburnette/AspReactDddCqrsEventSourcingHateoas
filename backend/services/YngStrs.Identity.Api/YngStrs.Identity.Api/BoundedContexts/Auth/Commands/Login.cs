using System.ComponentModel.DataAnnotations;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Identity.Api.Domain.Views;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Commands
{
    public class Login : ICommand<JwtView>
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}