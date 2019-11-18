using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using YngStrs.EmailWorker.Api.Models;
using YngStrs.EmailWorker.Api.Services.Core;

namespace YngStrs.EmailWorker.Api.Services.Business
{
    public class SendEmailService : ISendEmailService
    {
        private const string GmailHostName = "smtp.gmail.com";
        private const string GmailUserName = "yngstr1111@gmail.com";
        private const string GmailPassword = "qa1ws2ed3";

        public Task SendMailAsync(SendEmailModel model)
        {
            using (var mailMessage = new MailMessage(from: GmailUserName, to: model.EmailAddressTo))
            {
                mailMessage.Subject = model.Subject;
                mailMessage.Body = model.Body;
                mailMessage.IsBodyHtml = false;
                using (var smtp = new SmtpClient(GmailHostName))
                {
                    smtp.EnableSsl = true;
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = new NetworkCredential(GmailUserName, GmailPassword);
                    smtp.Port = 587;
                    return smtp.SendMailAsync(mailMessage);
                }
            }
        }
    }
}