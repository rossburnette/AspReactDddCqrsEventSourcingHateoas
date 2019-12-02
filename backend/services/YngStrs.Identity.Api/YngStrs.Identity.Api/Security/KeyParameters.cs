using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;

namespace YngStrs.Identity.Api.Security
{
    public class KeyParameters
    {
        public string D { get; set; }
        public string DP { get; set; }
        public string DQ { get; set; }
        public string Exponent { get; set; }
        public string InverseQ { get; set; }
        public string Modulus { get; set; }
        public string P { get; set; }
        public string Q { get; set; }

        public SigningCredentials CreateSigningCredentials() =>
            new SigningCredentials(new RsaSecurityKey(GetRsaParameters()), SecurityAlgorithms.RsaSha256);

        private RSAParameters GetRsaParameters() =>
            new RSAParameters
            {
                D = Base64UrlEncoder.DecodeBytes(D),
                DP = Base64UrlEncoder.DecodeBytes(DP),
                DQ = Base64UrlEncoder.DecodeBytes(DQ),
                Exponent = Base64UrlEncoder.DecodeBytes(Exponent),
                InverseQ = Base64UrlEncoder.DecodeBytes(InverseQ),
                Modulus = Base64UrlEncoder.DecodeBytes(Modulus),
                P = Base64UrlEncoder.DecodeBytes(P),
                Q = Base64UrlEncoder.DecodeBytes(Q)
            };
    }
}