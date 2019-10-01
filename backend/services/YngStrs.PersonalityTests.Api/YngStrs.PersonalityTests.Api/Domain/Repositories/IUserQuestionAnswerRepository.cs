using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Marten.Events;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Repositories
{
    public interface IUserQuestionAnswerRepository
    {
        Task<StreamState> GetUserQuestionAnswerEventStreamByIdAsync(Guid id);

        EventStream CreateUserQuestionAnswerEventStream();

        Task<IEnumerable<UserAnsweredQuestion>> GetEventsByStreamIdAsync(Guid streamId);

        Task<IReadOnlyList<UserQuestionAnswer>> GetAnswersByUserStreamAsync(Guid streamId);

        Task<UserQuestionAnswer> GetByUserAndOptionIdAsync(Guid chosenOptionId, Guid userIdentifier);
    }
}