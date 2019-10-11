using System;
using System.Threading.Tasks;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IUserIdentifierService
    {
        Task<Guid> SetUserAnswersEventStreamIdAsync();

        Guid GetAnswersEventStreamId();
    }
}