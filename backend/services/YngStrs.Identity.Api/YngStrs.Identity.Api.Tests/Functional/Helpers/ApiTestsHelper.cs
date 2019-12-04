using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoFixture;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;

namespace YngStrs.Identity.Api.Tests.Functional.Helpers
{
    public class ApiTestsHelper
    {
        private readonly AppFixture _appFixture;
        private readonly AuthTestsHelper _authHelper;

        public ApiTestsHelper(AppFixture appFixture)
        {
            _appFixture = appFixture;
            _authHelper = new AuthTestsHelper(_appFixture);
        }

        public async Task InTheContextOfAnAuthenticatedUser(Func<HttpClient, Task> serverCall, Fixture fixture, IEnumerable<Claim> withClaims = null)
        {
            var token = await SetupUserWithClaims(fixture);

            await _appFixture.ExecuteHttpClientAsync(serverCall, token);
        }

        public Task InTheContextOfAnAnonymousUser(Func<HttpClient, Task> serverCall) =>
            _appFixture.ExecuteHttpClientAsync(serverCall, null);

        private async Task<string> SetupUserWithClaims(Fixture fixture)
        {
            var registerCommand = fixture
                .Create<Register>();

            await _authHelper.Register(registerCommand);

            var token = (await _authHelper
                .Login(registerCommand.Email, registerCommand.Password))
                .TokenString;

            return token;
        }

    }
}