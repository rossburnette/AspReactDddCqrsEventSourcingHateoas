﻿using Marten;
using System;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class UserTestResultRepository : IUserTestResultRepository
    {
        private readonly IDocumentSession _session;

        public UserTestResultRepository(IDocumentSession session)
        {
            _session = session;
        }

        public Task<UserTestResult> GetByUserAndTestAsync(Guid userIdentifier, Guid personalityTestId) =>
            _session
                .Query<UserTestResult>()
                .FirstOrDefaultAsync(result =>
                    result.UserIdentifier == userIdentifier);
    }
}