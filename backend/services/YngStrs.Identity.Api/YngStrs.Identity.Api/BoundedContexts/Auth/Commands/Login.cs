using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Identity.Api.Domain.Views;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Commands
{
    public class Login : ICommand<JwtView>
    {
        [JsonProperty(PropertyName = "username")]
        [Required]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "password")]
        [Required]
        public string Password { get; set; }

        [JsonProperty(PropertyName = "scope")]
        [Required]
        public string Scope { get; set; }

        [JsonProperty(PropertyName = "client_id")]
        [Required]
        public string ClientId { get; set; }

        [JsonProperty(PropertyName = "client_secret")]
        [Required]
        public string ClientSecret { get; set; }

        [JsonProperty(PropertyName = "grant_type")]
        [Required]
        public string GrantType { get; set; }
    }
}