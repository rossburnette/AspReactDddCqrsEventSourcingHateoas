using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marten;
using Marten.Events;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Domain.Repositories;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class UserQuestionAnswerRepository : IUserQuestionAnswerRepository
    {
        private readonly IDocumentSession _session;

        public UserQuestionAnswerRepository(IDocumentSession session)
        {
            _session = session;
        }

        public Task<StreamState> GetUserQuestionAnswerEventStreamByIdAsync(Guid id) =>
            _session.Events.FetchStreamStateAsync(id);

        public EventStream CreateUserQuestionAnswerEventStream()
        {
            var eventStream = _session.Events.StartStream<UserQuestionAnswer>();
            _session.SaveChangesAsync();
            return eventStream;
        }

        public async Task<IEnumerable<UserAnsweredQuestion>> GetEventsByStreamIdAsync(Guid streamId)
        {
            var events = await _session.Events.FetchStreamAsync(streamId);
            return events
                .Select(@event => (UserAnsweredQuestion) @event.Data);
        }

        public Task<IReadOnlyList<UserQuestionAnswer>> GetAnswersByUserStreamAsync(Guid streamId) => 
            _session
                .Query<UserQuestionAnswer>()
                .Where(answer => answer.UserIdentifier == streamId)
                .ToListAsync();

        public Task<UserQuestionAnswer> GetByUserAndOptionIdAsync(Guid chosenOptionId, Guid userIdentifier) =>
            _session
                .Query<UserQuestionAnswer>()
                .FirstOrDefaultAsync(answer =>
                    answer.ChosenOptionId == chosenOptionId &&
                    answer.UserIdentifier == userIdentifier);
    }
}