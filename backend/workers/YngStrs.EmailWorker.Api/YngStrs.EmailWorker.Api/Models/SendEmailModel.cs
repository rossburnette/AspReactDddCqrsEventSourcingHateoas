namespace YngStrs.EmailWorker.Api.Models
{
    public class SendEmailModel
    {
        public string EmailAddressTo { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }
    }
}