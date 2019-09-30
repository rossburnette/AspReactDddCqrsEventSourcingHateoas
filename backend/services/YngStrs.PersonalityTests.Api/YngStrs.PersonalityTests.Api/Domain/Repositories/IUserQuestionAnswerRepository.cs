using Marten.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Repositories
{
    public interface IUserQuestionAnswerRepository
    {
        EventStream CreateUserQuestionAnswerEventStream();
    }
}