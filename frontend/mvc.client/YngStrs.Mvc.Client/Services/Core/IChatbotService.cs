using System.Threading.Tasks;
using YngStrs.Mvc.Client.Models.Chatbot;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IChatbotService
    {
        object GetQuestionsContent();

        Task<SaveChatbotResultsServiceModel> SaveUserChatbotAnswersAsync(ChatbotResultsRootObject rootObject);

        void ArrangeUserAnswers(ChatbotResultsRootObject rootObject);
    }
}