namespace YngStrs.EmailWorker.Api.Services.Core
{
    public interface IRequestProcessorFactory
    {
        IMessageRequestProcessor CreateMessageProcessor(byte[] messageBody);
    }
}