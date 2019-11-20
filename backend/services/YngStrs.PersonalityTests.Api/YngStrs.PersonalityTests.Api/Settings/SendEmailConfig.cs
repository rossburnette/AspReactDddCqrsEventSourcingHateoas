namespace YngStrs.PersonalityTests.Api.Settings
{
    public class SendEmailConfig
    {
        public string EmailQueue { get; set; }
        public string EmailExchange { get; set; }
        public string RoutingKey { get; set; }
    }
}