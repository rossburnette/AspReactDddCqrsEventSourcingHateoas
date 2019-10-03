using Marten.Events;
using Optional;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YngStrs.Common;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Repositories
{
    public interface IUserQuestionAnswerRepository
    {
        Task<StreamState> GetUserQuestionAnswerEventStreamByIdAsync(Guid id);

        Task<Option<StreamState, Error>> GetUserAnswerEventStreamByIdAsync(Guid eventStreamId);

        EventStream CreateUserQuestionAnswerEventStream();

        Task<IEnumerable<UserAnsweredQuestion>> GetEventsByStreamIdAsync(Guid streamId);

        Task<IReadOnlyList<UserQuestionAnswer>> GetAnswersByUserStreamAsync(Guid streamId);

        Task<UserQuestionAnswer> GetByUserAndOptionIdAsync(Guid chosenOptionId, Guid userIdentifier);
    }
}