using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.Persistence.EntityFramework
{
    public class IdentityContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        /// <summary>
        /// Initializes an instance of the <see cref="IdentityContext"/> class.
        /// </summary>
        /// <param name="options">The database context options.</param>
        public IdentityContext(DbContextOptions<IdentityContext> options)
            : base(options)
        {
        }
    }
}