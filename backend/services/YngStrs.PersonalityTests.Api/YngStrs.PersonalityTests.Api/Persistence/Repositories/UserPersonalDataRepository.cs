using System;
using System.Threading.Tasks;
using Marten;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class UserPersonalDataRepository : IUserPersonalDataRepository
    {
        private readonly IDocumentSession _session;

        public UserPersonalDataRepository(IDocumentSession session)
        {
            _session = session;
        }

        public Task<UserPersonalData> GetByUserIdentifierAsync(Guid userIdentifier) =>
            _session
                .Query<UserPersonalData>()
                .FirstOrDefaultAsync(data => data.UserIdentifier == userIdentifier);

        public Task<bool> HasAnyForUserIdentifierAsync(Guid userIdentifier) =>
            _session
                .Query<UserPersonalData>()
                .AnyAsync(data => data.UserIdentifier == userIdentifier);
    }
}