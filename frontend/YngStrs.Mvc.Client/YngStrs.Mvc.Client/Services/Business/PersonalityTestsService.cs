using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Marvin.StreamExtensions;
using Optional;
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

        public async Task<Option<IEnumerable<PersonalityTest>, Error>> GetAsync()
        {
            IEnumerable<PersonalityTest> result;

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
                            return Option.None<IEnumerable<PersonalityTest>, Error>(
                                new Error("The requested movie cannot be found."));
                        case System.Net.HttpStatusCode.Unauthorized:
                            // trigger a login flow
                            return Option.None<IEnumerable<PersonalityTest>, Error>(
                                new Error("Unauthorized."));
                        default:
                            response.EnsureSuccessStatusCode();
                            break;
                    }
                }

                var stream = await response.Content.ReadAsStreamAsync();
                result = stream.ReadAndDeserializeFromJson<IEnumerable<PersonalityTest>>();
            }

            return result.Some<IEnumerable<PersonalityTest>, Error>();
        }
    }
}