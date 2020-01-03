using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace YngStrs.PersonalityTests.Api.Tests.Functional.Helpers
{
    public class ApiTestsHelper
    {
        private readonly AppFixture _appFixture;

        public ApiTestsHelper(AppFixture appFixture)
        {
            _appFixture = appFixture;
        }

        public Task InTheContextOfAnAnonymousUser(Func<HttpClient, Task> serverCall) =>
            _appFixture.ExecuteHttpClientAsync(serverCall);
    }
}