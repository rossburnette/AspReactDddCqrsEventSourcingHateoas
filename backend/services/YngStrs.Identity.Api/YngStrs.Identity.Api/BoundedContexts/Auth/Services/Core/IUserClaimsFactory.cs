﻿using System.Collections.Generic;
using System.Security.Claims;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.BoundedContexts.Auth.Services.Core
{
    public interface IUserClaimsFactory
    {
        IEnumerable<Claim> CreateClaimsFor(User user);
    }
}