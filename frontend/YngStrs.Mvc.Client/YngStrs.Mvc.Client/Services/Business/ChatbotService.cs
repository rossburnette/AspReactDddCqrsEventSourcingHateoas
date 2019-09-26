using System.Reflection;
using Marvin.StreamExtensions;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class ChatbotService : IChatbotService
    {
        public object GetQuestionsContent()
        {
            const string resourcePath = "YngStrs.Mvc.Client.EmbeddedResources.";

            var questionsResourceStream = Assembly
                .GetExecutingAssembly()
                .GetManifestResourceStream(resourcePath + "questions.json");

            return questionsResourceStream.ReadAndDeserializeFromJson();
        }
    }
}