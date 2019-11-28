using System;
using System.Threading;
using System.Threading.Tasks;
using EasyNetQ;
using EasyNetQ.Topology;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using YngStrs.EmailWorker.Api.Services.Core;
using YngStrs.EmailWorker.Api.Settings;

namespace YngStrs.EmailWorker.Api.Services.Business
{
    public class RabbitMqService : BackgroundService
    {
        private readonly GetEmailConfig _rabbitMqEmailOptions;
        private readonly IAdvancedBus _bus;
        private IQueue _queue;
        private IDisposable _consumer;
        private readonly IMessageRequestProcessor _messageRequestProcessor;

        public RabbitMqService(
            IOptions<GetEmailConfig> rabbitMqEmailOptions,
            IAdvancedBus bus,
            IMessageRequestProcessor messageRequestProcessor)
        {
            _bus = bus;
            _messageRequestProcessor = messageRequestProcessor;
            _rabbitMqEmailOptions = rabbitMqEmailOptions.Value;
        }

        public override Task StartAsync(CancellationToken cancellationToken)
        {
            _queue = _bus.QueueDeclare(_rabbitMqEmailOptions.EmailQueue);

            return base.StartAsync(cancellationToken);
        }

        public override Task StopAsync(CancellationToken cancellationToken)
        {
            _consumer?.Dispose();

            return base.StopAsync(cancellationToken);
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _consumer = _bus.Consume(_queue, MessageReceived);

            return Task.CompletedTask;
        }

        private Task MessageReceived(byte[] body, MessageProperties messageProperties, MessageReceivedInfo info) =>
            _messageRequestProcessor.ProcessAsync(body);
    }
}