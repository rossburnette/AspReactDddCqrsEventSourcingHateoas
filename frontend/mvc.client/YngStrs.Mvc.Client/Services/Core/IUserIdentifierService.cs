using System;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IUserIdentifierService
    {
        Guid SetUserAnswersEventStreamId();

        Guid GetAnswersEventStreamId();
    }
}