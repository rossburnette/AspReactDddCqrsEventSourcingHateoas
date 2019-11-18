using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Services.Business
{
    public class RequestProcessorFactory : IRequestProcessorFactory
    {
        public IMessageRequestProcessor CreateMessageProcessor(byte[] messageBody)
        {
            throw new System.NotImplementedException();
        }
    }
}