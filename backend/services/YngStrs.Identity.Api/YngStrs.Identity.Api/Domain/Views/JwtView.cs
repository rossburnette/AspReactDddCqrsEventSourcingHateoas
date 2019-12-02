namespace YngStrs.Identity.Api.Domain.Views
{
    public struct JwtView
    {
        public JwtView(string tokenString)
        {
            TokenString = tokenString;
        }

        public string TokenString { get; }
    }
}