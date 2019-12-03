using System;
using Optional;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Core;
using YngStrs.Identity.Api.Domain.Views;

namespace YngStrs.Identity.Api.BoundedContexts.Users.Queries
{
    public class GetUser : IQuery<Option<UserView, Error>>
    {
        public Guid Id { get; set; }
    }
}