﻿using Marten;
using YngStrs.Chatbot.Api.Domain.Repositories;

namespace YngStrs.Chatbot.Api.Persistence.Repositories
{
    /// <inheritdoc cref="IUserAnswersRepository"/>
    public class UserAnswersRepository : IUserAnswersRepository
    {
        private readonly IDocumentSession _session;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserAnswersRepository"/> class.
        /// </summary>
        /// <param name="session"></param>
        public UserAnswersRepository(IDocumentSession session)
        {
            _session = session;
        }
    }
}