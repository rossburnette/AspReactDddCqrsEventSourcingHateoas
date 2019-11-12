using Marten.Events;
using System.Threading.Tasks;
using YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands;
using YngStrs.Chatbot.Api.Domain.Entities;

namespace YngStrs.Chatbot.Api.Domain.Repositories
{
    /// <summary>
    /// Repository linked with <see cref="UserAnswers"/>.
    /// </summary>
    public interface IUserAnswersRepository
    {
        Task<EventStream> CreateUserAnswersEventStreamAsync(RegisterEventStream command);
    }
}