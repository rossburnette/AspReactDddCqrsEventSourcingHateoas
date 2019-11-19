using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Marvin.StreamExtensions;
using YngStrs.Mvc.Client.Models.PersonalityTest;
using YngStrs.Mvc.Client.Services.Core;
using static YngStrs.Mvc.Client.GlobalConstants.HttpClientNames;
using static YngStrs.Mvc.Client.GlobalConstants.PersonalityTestApiUrls;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class PersonalityTestsService : IPersonalityTestsService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IUserIdentifierService _identifierService;


        private readonly CancellationTokenSource _cancellationTokenSource =
            new CancellationTokenSource();

        public PersonalityTestsService(
            IHttpClientFactory httpClientFactory,
            IUserIdentifierService identifierService)
        {
            _httpClientFactory = httpClientFactory;
            _identifierService = identifierService;
        }

        /// <summary>
        /// Returns ready to use model with questions and its options.
        /// </summary>
        public async Task<PersonalityTestViewModel> GetPersonalityTestAsync()
        {
            var serviceResult = await FetchStructuredAsync();
            return serviceResult == null ?
                null :
                new PersonalityTestViewModel(serviceResult);
        }

        /// <summary>
        /// Pulls the Personality Test questions and options from the API.
        /// </summary>
        public async Task<StructuredTestServiceModel> FetchStructuredAsync()
        {
            StructuredTestServiceModel result;

            var httpClient = _httpClientFactory.CreateClient(TestClientName);

            var request = new HttpRequestMessage(
                HttpMethod.Get,
                GetStructuredUrlPath);

            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            request.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));

            using (var response = await httpClient.SendAsync(
                request,
                HttpCompletionOption.ResponseHeadersRead,
                _cancellationTokenSource.Token))
            {
                if (!response.IsSuccessStatusCode)
                {
                    switch (response.StatusCode)
                    {
                        case System.Net.HttpStatusCode.NotFound:
                        case System.Net.HttpStatusCode.Unauthorized:
                            return default;
                        default:
                            response.EnsureSuccessStatusCode();
                            break;
                    }
                }

                var stream = await response.Content.ReadAsStreamAsync();
                result = stream.ReadAndDeserializeFromJson<StructuredTestServiceModel>();
            }

            return result;
        }

        /// <summary>
        /// Saves a chosen question option ID.
        /// </summary>
        /// <param name="chosenOptionId"></param>
        public Task<HttpResponseMessage> RegisterUserAnswerAsync(Guid chosenOptionId)
        {
            var httpClient = _httpClientFactory.CreateClient(TestClientName);

            var requestBody = new RegisterUserAnswerModel(
                _identifierService.GetAnswersEventStreamId(),
                chosenOptionId);

            return httpClient.PostAsJsonAsync(RegisterUserAnswerUrlPath, requestBody);
        }

        /// <summary>
        /// Sends a request to the API to save the user test results.
        /// </summary>
        /// <param name="bindingModel"></param>
        /// <returns>if successfully persisted.</returns>
        public async Task<bool> SaveUserTestResultsAsync(PersonalityTestBindingModel bindingModel)
        {
            var httpClient = _httpClientFactory.CreateClient(TestClientName);

            var requestBody = new SaveUserTestAnswers(
                bindingModel,
                _identifierService.GetAnswersEventStreamId());

            var response = await httpClient
                .PostAsJsonAsync(SaveResultsUrlPath, requestBody);

            return response.IsSuccessStatusCode;
        }

        /// <summary>
        /// Saves the user data and triggers email with the result.
        /// </summary>
        /// <param name="dataModel">Input form model.</param>
        public Task SaveUserDataAsync(UserDataModel dataModel)
        {
            var httpClient = _httpClientFactory.CreateClient(TestClientName);

            var requestBody = new SaveUserDataModel(
                dataModel,
                _identifierService.GetAnswersEventStreamId());


            return httpClient.PostAsJsonAsync(SaveUserDataUrlPath, requestBody);
        }
    }
}