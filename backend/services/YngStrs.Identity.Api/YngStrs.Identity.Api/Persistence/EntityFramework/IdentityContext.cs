using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.Persistence.EntityFramework
{
    public class IdentityContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {

    }
}