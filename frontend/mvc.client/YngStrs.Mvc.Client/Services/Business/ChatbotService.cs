using System.Collections.Generic;
using System.Reflection;
using Marvin.StreamExtensions;
using Newtonsoft.Json;
using YngStrs.Mvc.Client.Models.Chatbot;
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

        public void ArrangeUserAnswers(ChatbotResultsRootObject rootObject)
        {
           var userAnswers = JsonConvert.DeserializeObject<IEnumerable<UserChatBotAnswer>>(rootObject.res);
           var userData = rootObject.form; //"name=dsfsfds&email=admin%40jbet.org&hr-checkbox=1"
        }
    }
}