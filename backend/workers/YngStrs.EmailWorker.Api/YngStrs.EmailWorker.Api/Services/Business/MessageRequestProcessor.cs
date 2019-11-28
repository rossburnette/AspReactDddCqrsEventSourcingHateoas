using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using YngStrs.EmailWorker.Api.Models;
using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Services.Business
{
    public class MessageRequestProcessor : IMessageRequestProcessor
    {
        private readonly ISendEmailService _emailService;

        public MessageRequestProcessor(ISendEmailService emailService)
        {
            _emailService = emailService;
        }

        public async Task ProcessAsync(byte[] messageData)
        {
            var stringMessage = Encoding.UTF8.GetString(messageData);

            var message = JsonConvert.DeserializeObject<SendEmailModel>(stringMessage);

            await _emailService.SendMailAsync(message);
        }
    }
}