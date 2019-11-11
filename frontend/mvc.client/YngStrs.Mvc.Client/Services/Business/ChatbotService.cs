using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using Marvin.StreamExtensions;
using Newtonsoft.Json;
using YngStrs.Mvc.Client.Models.Chatbot;
using YngStrs.Mvc.Client.Services.Core;

using static YngStrs.Mvc.Client.GlobalConstants.HttpClientNames;
using static YngStrs.Mvc.Client.GlobalConstants.ChatbotApiUrls;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class ChatbotService : IChatbotService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ChatbotService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public object GetQuestionsContent()
        {
            const string resourcePath = "YngStrs.Mvc.Client.EmbeddedResources.";

            var questionsResourceStream = Assembly
                .GetExecutingAssembly()
                .GetManifestResourceStream(resourcePath + "questions.json");

            return questionsResourceStream.ReadAndDeserializeFromJson();
        }

        public async Task<SaveChatbotResultsServiceModel> SaveUserChatbotAnswersAsync(ChatbotResultsRootObject rootObject)
        {
            var httpClient = _httpClientFactory.CreateClient(ChatbotClientName);

            var sendUserAnswersModel = new SendUserAnswersModel(rootObject, Guid.NewGuid()); //TODO: this

            var response = await httpClient
                .PostAsJsonAsync(SaveUserResultsUrlPath, sendUserAnswersModel);

            if (!response.IsSuccessStatusCode)
            {
                return default;
            }

            var stream = await response.Content.ReadAsStreamAsync();

            return await stream.ReadAndDeserializeFromJsonAsync<SaveChatbotResultsServiceModel>();
        }

        public void ArrangeUserAnswers(ChatbotResultsRootObject rootObject)
        {
           var userAnswers = JsonConvert.DeserializeObject<IEnumerable<UserChatBotAnswer>>(rootObject.Res);
           var userData = rootObject.Form; //"name=dsfsfds&email=admin%40jbet.org&hr-checkbox=1"
        }
    }
}