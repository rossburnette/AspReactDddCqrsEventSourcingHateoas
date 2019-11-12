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
        private readonly IUserIdentifierService _identifierService;

        public ChatbotService(
            IHttpClientFactory httpClientFactory,
            IUserIdentifierService identifierService)
        {
            _httpClientFactory = httpClientFactory;
            _identifierService = identifierService;
        }

        public object GetQuestionsContent()
        {
            const string resourcePath = "YngStrs.Mvc.Client.EmbeddedResources.";

            var questionsResourceStream = Assembly
                .GetExecutingAssembly()
                .GetManifestResourceStream(resourcePath + "questions.json");

            return questionsResourceStream.ReadAndDeserializeFromJson();
        }

        public async Task<SaveChatbotResultsModel> SaveUserChatbotAnswersAsync(ChatbotResultsRootObject rootObject)
        {
            var httpClient = _httpClientFactory.CreateClient(ChatbotClientName);

            var sendUserAnswersModel = new SendUserAnswersModel(rootObject, _identifierService.GetAnswersEventStreamId());

            var response = await httpClient
                .PostAsJsonAsync(SaveUserResultsUrlPath, sendUserAnswersModel);

            if (!response.IsSuccessStatusCode)
            {
                return default;
            }

            var stream = await response.Content.ReadAsStreamAsync();

            return await stream.ReadAndDeserializeFromJsonAsync<SaveChatbotResultsModel>();
        }

        [Obsolete]
        public void ArrangeUserAnswers(ChatbotResultsRootObject rootObject)
        {
           var userAnswers = JsonConvert.DeserializeObject<IEnumerable<UserChatBotAnswer>>(rootObject.Res);
           var userData = rootObject.Form; //"name=dsfsfds&email=admin%40jbet.org&hr-checkbox=1"
        }
    }
}