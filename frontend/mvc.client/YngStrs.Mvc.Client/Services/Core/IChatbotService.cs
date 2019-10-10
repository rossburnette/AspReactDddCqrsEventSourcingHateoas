using YngStrs.Mvc.Client.Models.Chatbot;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IChatbotService
    {
        object GetQuestionsContent();

        void ArrangeUserAnswers(ChatbotResultsRootObject rootObject);
    }
}