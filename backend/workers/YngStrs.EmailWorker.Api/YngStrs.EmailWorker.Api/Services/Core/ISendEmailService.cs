using System.Threading.Tasks;
using YngStrs.EmailWorker.Api.Models;

namespace YngStrs.EmailWorker.Api.Services.Core
{
    public interface ISendEmailService
    {
        Task SendMailAsync(SendEmailModel model);
    }
}