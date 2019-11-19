using MediatR;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Dispatchers
{
    /// <summary>
    /// TODO
    /// </summary>
    public class MailUserDispatcher : INotificationHandler<UserSubmittedPersonalData>
    {
        public Task Handle(UserSubmittedPersonalData notification, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}