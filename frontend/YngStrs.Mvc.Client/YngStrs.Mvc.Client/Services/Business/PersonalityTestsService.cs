using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Marvin.StreamExtensions;
using YngStrs.Mvc.Client.Models;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class PersonalityTestsService : IPersonalityTestsService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        private readonly CancellationTokenSource _cancellationTokenSource =
            new CancellationTokenSource();

        public PersonalityTestsService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<IEnumerable<PersonalityTestQuestion>> GetAsync()
        {
            IEnumerable<PersonalityTestServiceModel> result;

            var httpClient = _httpClientFactory.CreateClient("PersonalityTestClient");

            var request = new HttpRequestMessage(
                HttpMethod.Get,
                "/api/personality-tests");

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
                        // inspect the status code
                        case System.Net.HttpStatusCode.NotFound:
                            // show this to the user
                            return new List<PersonalityTestQuestion>();
                        case System.Net.HttpStatusCode.Unauthorized:
                            // trigger a login flow
                            return new List<PersonalityTestQuestion>();
                        default:
                            response.EnsureSuccessStatusCode();
                            break;
                    }
                }

                var stream = await response.Content.ReadAsStreamAsync();
                result = stream.ReadAndDeserializeFromJson<IEnumerable<PersonalityTestServiceModel>>();
            }

            return ConvertServiceModelToView(result);
        }

        private static IEnumerable<PersonalityTestQuestion> ConvertServiceModelToView(
            IEnumerable<PersonalityTestServiceModel> serviceModels)
        {
            IDictionary<Guid, List<QuestionOption>> dictionary = new Dictionary<Guid, List<QuestionOption>>();

            foreach (var serviceModel in serviceModels)
            {
                if (dictionary.ContainsKey(serviceModel.QuestionId))
                {
                    dictionary[serviceModel.QuestionId].Add(new QuestionOption
                    {
                        QuestionNumber = serviceModel.QuestionNumber,
                        IsTextOnly = serviceModel.IsTextOnly,
                        OptionId = serviceModel.OptionId,
                        OptionDescription = serviceModel.OptionDescription,
                        Base64Image = serviceModel.Base64Image
                    });
                }
                else
                {
                    var questionOptions = new List<QuestionOption>
                    {
                        new QuestionOption
                        {
                            QuestionNumber = serviceModel.QuestionNumber,
                            IsTextOnly = serviceModel.IsTextOnly,
                            OptionId = serviceModel.OptionId,
                            Base64Image = serviceModel.Base64Image,
                            OptionDescription = serviceModel.OptionDescription
                        }
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