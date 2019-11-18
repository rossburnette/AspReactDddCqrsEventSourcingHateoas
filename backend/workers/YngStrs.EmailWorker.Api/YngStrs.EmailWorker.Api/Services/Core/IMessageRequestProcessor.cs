using System.Threading.Tasks;

namespace YngStrs.EmailWorker.Api.Services.Core
{
    public interface IMessageRequestProcessor
    {
        Task Process();
    }
}