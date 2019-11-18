namespace YngStrs.EmailWorker.Api.Settings
{
    public class GetEmailConfig
    {
        public string EmailQueue { get; set; }
        public string EmailExchange { get; set; }
        public string RoutingKey { get; set; }
    }
}