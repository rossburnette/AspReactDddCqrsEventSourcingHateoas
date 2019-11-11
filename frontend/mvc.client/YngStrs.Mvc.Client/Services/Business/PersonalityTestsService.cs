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

        public async Task<StructuredTestServiceModel> GetStructuredAsync()
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

        private IEnumerable<PersonalityTestQuestion> ConvertServiceModelToView(
            IEnumerable<PersonalityTestServiceModel> serviceModels)
        {
            IDictionary<Guid, List<QuestionOption>> dictionary = new Dictionary<Guid, List<QuestionOption>>();

            foreach (var serviceModel in serviceModels)
            {
                if (dictionary.ContainsKey(serviceModel.QuestionId))
                {
                    dictionary[serviceModel.QuestionId].Add(
                        _mapper.Map<QuestionOption>(serviceModel));
                }
                else
                {
                    var questionOptions = new List<QuestionOption>
                    {
                        _mapper.Map<QuestionOption>(serviceModel)
                    };

                    dictionary.Add(serviceModel.QuestionId, questionOptions);
                }
            }

            return dictionary
                .Select(item => new PersonalityTestQuestion
                {
                    QuestionId = item.Key,
                    QuestionOptions = item.Value
                })
                .ToList();
        }
    }
}