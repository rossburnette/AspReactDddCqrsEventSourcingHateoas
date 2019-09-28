using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace YngStrs.Mvc.Client.DelegatingHandlers
{
    public class TimeOutDelegatingHandler : DelegatingHandler
    {
        private readonly TimeSpan _timeOut;

        public TimeOutDelegatingHandler(TimeSpan timeOut)
        {
            _timeOut = timeOut;
        }

        public TimeOutDelegatingHandler(HttpMessageHandler innerHandler,
            TimeSpan timeOut)
            : base(innerHandler)
        {
            _timeOut = timeOut;
        }

        protected override async Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request,
            CancellationToken cancellationToken)
        {
            using (var linkedCancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken))
            {
                linkedCancellationTokenSource.CancelAfter(_timeOut);
                try
                {
                    return await base.SendAsync(request, linkedCancellationTokenSource.Token);
                }
                catch (OperationCanceledException ex)
                {
                    if (!cancellationToken.IsCancellationRequested)
                    {
                        throw new TimeoutException("The request timed out.", ex);
                    }
                    throw;
                }
            }
        }
    }
}