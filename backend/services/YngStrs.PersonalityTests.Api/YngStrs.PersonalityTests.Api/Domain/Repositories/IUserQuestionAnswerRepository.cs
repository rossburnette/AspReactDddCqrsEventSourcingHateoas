using System;
using System.Threading.Tasks;
using Marten.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Repositories
{
    public interface IUserQuestionAnswerRepository
    {
        Task<StreamState> GetUserQuestionAnswerEventStreamByIdAsync(Guid id);

        EventStream CreateUserQuestionAnswerEventStream();
    }
}