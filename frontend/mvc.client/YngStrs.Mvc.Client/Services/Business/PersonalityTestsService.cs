using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Marvin.StreamExtensions;
using YngStrs.Mvc.Client.Models;
using YngStrs.Mvc.Client.Models.PersonalityTest;
using YngStrs.Mvc.Client.Services.Core;

using static YngStrs.Mvc.Client.GlobalConstants.HttpClientNames;
using static YngStrs.Mvc.Client.GlobalConstants.PersonalityTestApiUrls;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class PersonalityTestsService : IPersonalityTestsService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IMapper _mapper;

        private readonly CancellationTokenSource _cancellationTokenSource =
            new CancellationTokenSource();

        public PersonalityTestsService(IHttpClientFactory httpClientFactory, IMapper mapper)
        {
            _httpClientFactory = httpClientFactory;
            _mapper = mapper;
        }

        public async Task<Guid> GetAnswersEventStreamIdAsync()
        {
            Guid userAnswersEventStreamId;

            var httpClient = _httpClientFactory.CreateClient("PersonalityTestClient");

            var request = new HttpRequestMessage(
                HttpMethod.Post,
                "/api/personality-tests/begin");

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
                var objectResult = stream.ReadAndDeserializeFromJson<UserAnswersStreamServiceModel>();
                userAnswersEventStreamId = objectResult.UserAnswersEventStreamId;
            }

            return userAnswersEventStreamId;
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
    }
}