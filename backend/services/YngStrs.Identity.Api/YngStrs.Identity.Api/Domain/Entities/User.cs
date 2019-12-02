using System;
using Microsoft.AspNetCore.Identity;

namespace YngStrs.Identity.Api.Domain.Entities
{
    public class User : IdentityUser<Guid>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTimeOffset RegistrationDate { get; set; }
    }
}