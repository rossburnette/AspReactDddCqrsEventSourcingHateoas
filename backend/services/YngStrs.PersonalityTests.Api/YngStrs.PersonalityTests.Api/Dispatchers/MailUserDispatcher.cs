using MediatR;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using EasyNetQ;
using EasyNetQ.Topology;
using Microsoft.Extensions.Options;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Settings;

namespace YngStrs.PersonalityTests.Api.Dispatchers
{
    /// <summary>
    /// TODO
    /// </summary>
    public class MailUserDispatcher : INotificationHandler<UserSubmittedPersonalData>
    {
        private readonly SendEmailConfig _config;
        private readonly IExchange _exchange;
        private readonly IAdvancedBus _advancedBus;

        /// <summary>
        /// Initializes a new instance of the <see cref="MailUserDispatcher"/> class.
        /// </summary>
        /// <param name="bus"></param>
        /// <param name="config"></param>
        public MailUserDispatcher(IBus bus, IOptions<SendEmailConfig> config)
        {
            _config = config.Value;
            _advancedBus = bus.Advanced;

            var queue = _advancedBus.QueueDeclare(_config.EmailQueue);
            _exchange = _advancedBus.ExchangeDeclare(_config.EmailExchange, ExchangeType.Direct);
            _advancedBus.Bind(_exchange, queue, _config.RoutingKey);
        }

        public async Task Handle(UserSubmittedPersonalData notification, CancellationToken cancellationToken)
        {
            Debug.WriteLine(notification);
        }
    }
}