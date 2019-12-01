using System;
using System.Threading.Tasks;
using YngStrs.Chatbot.Api.Domain.Entities;

namespace YngStrs.Chatbot.Api.Domain.Repositories
{
    /// <summary>
    /// Repository linked with <see cref="UserAnswers"/>.
    /// </summary>
    public interface IUserAnswersRepository
    {
        Task<UserAnswers> GetByRegistratedIdAsync(Guid aggregateId);
    }
}