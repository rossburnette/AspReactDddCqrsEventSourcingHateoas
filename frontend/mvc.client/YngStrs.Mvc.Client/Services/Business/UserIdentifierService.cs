using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using YngStrs.Mvc.Client.Configuration;
using YngStrs.Mvc.Client.Services.Core;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class UserIdentifierService : IUserIdentifierService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IPersonalityTestsService _personalityTestsService;

        public UserIdentifierService(
            IHttpContextAccessor httpContextAccessor,
            IPersonalityTestsService personalityTestsService)
        {
            _httpContextAccessor = httpContextAccessor;
            _personalityTestsService = personalityTestsService;
        }

        public async Task<Guid> SetUserAnswersEventStreamIdAsync()
        {
            var answersEventStreamId = await _personalityTestsService.GetAnswersEventStreamIdAsync();

            _httpContextAccessor
                .HttpContext
                .Response
                .Cookies
                .Append(Constants.UserIdentifier.UserAnswersEventStreamId, answersEventStreamId.ToString());

            return answersEventStreamId;
        }

        public Guid GetAnswersEventStreamId()
        {
            var hasStream = _httpContextAccessor
                .HttpContext
                .Request
                .Cookies
                .TryGetValue(Constants.UserIdentifier.UserAnswersEventStreamId, out var streamId);

            if (!hasStream)
            {
                return Guid.Empty;
            }

            var isValidStream = Guid.TryParse(streamId, out var result);

            return isValidStream ? result : Guid.Empty;
        }
    }
}