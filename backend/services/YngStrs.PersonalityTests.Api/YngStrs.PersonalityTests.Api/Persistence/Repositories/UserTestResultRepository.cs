using Marten;
using System;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class UserTestResultRepository : IUserTestResultRepository
    {
        private readonly IDocumentSession _session;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserTestResultRepository"/> class.
        /// </summary>
        /// <param name="session"></param>
        public UserTestResultRepository(IDocumentSession session)
        {
            _session = session;
        }

        public Task<UserTestResult> GetByUserAsync(Guid userIdentifier) =>
            _session
                .Query<UserTestResult>()
                .FirstOrDefaultAsync(result => result.UserIdentifier == userIdentifier);
    }
}