using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using YngStrs.Mvc.Client.Services.Core;

using static YngStrs.Mvc.Client.GlobalConstants.UserIdentifier;

namespace YngStrs.Mvc.Client.Services.Business
{
    public class UserIdentifierService : IUserIdentifierService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserIdentifierService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public Guid SetUserAnswersEventStreamId()
        {
            var answersEventStreamId = Guid.NewGuid();

            _httpContextAccessor
                .HttpContext
                .Response
                .Cookies
                .Append(UserAnswersEventStreamId, answersEventStreamId.ToString());

            return answersEventStreamId;
        }

        public Guid GetAnswersEventStreamId()
        {
            var hasStream = _httpContextAccessor
                .HttpContext
                .Request
                .Cookies
                .TryGetValue(UserAnswersEventStreamId, out var streamId);

            if (!hasStream)
            {
                return Guid.Empty;
            }

            var isValidStream = Guid.TryParse(streamId, out var result);

            return isValidStream ? result : Guid.Empty;
        }
    }
}