using EasyNetQ;
using EasyNetQ.Topology;
using MediatR;
using Microsoft.Extensions.Options;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands;
using YngStrs.PersonalityTests.Api.Domain.Events;
using YngStrs.PersonalityTests.Api.Domain.Repositories;
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
        private readonly IUserTestResultRepository _userTestResultRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="MailUserDispatcher"/> class.
        /// </summary>
        /// <param name="bus"></param>
        /// <param name="config"></param>
        /// <param name="userTestResultRepository"></param>
        public MailUserDispatcher(
            IBus bus,
            IOptions<SendEmailConfig> config,
            IUserTestResultRepository userTestResultRepository)
        {
            _userTestResultRepository = userTestResultRepository;
            _config = config.Value;
            _advancedBus = bus.Advanced;

            var queue = _advancedBus.QueueDeclare(_config.EmailQueue);
            _exchange = _advancedBus.ExchangeDeclare(_config.EmailExchange, ExchangeType.Direct);
            _advancedBus.Bind(_exchange, queue, _config.RoutingKey);
        }

        /// <summary>
        /// Enqueue message to the Email Worker API for sending a mail
        /// to the user with his/hers results from the test.
        /// </summary>
        /// <param name="notification"></param>
        /// <param name="cancellationToken"></param>
        public async Task Handle(UserSubmittedPersonalData notification, CancellationToken cancellationToken)
        {
            var results = await _userTestResultRepository.GetByUserAsync(notification.UserIdentifier);

            var mailBody = $"Action - {results.ResultStatistics.Action}\n" +
                           $"Idea - {results.ResultStatistics.Idea}";

            var emailModel = new SendUserResultsEmail(notification.Email, mailBody);

            await _advancedBus.PublishAsync(
                exchange: _exchange,
                routingKey: _config.RoutingKey,
                mandatory: false,
                message: new Message<SendUserResultsEmail>(emailModel));
        }
    }
}