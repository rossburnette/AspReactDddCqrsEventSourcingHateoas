namespace YngStrs.Identity.Api.Settings
{
    public class JwtConfiguration
    {
        public string IssuerUri { get; set; }

        public string Audience { get; set; }

        public string Secret { get; set; }
    }
}