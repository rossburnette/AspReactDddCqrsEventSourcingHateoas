using System.Threading.Tasks;
using YngStrs.Mvc.Client.Models.Chatbot;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IChatbotService
    {
        object GetQuestionsContent();

        Task<SaveChatbotResultsModel> SaveUserChatbotAnswersAsync(ChatbotResultsRootObject rootObject);

        void ArrangeUserAnswers(ChatbotResultsRootObject rootObject);
    }
}