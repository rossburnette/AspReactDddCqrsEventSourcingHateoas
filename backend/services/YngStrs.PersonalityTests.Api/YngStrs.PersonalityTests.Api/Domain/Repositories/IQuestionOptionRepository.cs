using System;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Repositories
{
    public interface IQuestionOptionRepository
    {
        Task<QuestionOption> GetByIdAsync(Guid id);
    }
}