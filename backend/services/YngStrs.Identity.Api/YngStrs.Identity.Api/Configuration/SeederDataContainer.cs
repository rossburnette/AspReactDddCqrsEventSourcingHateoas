using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;
using YngStrs.Identity.Api.Domain.Entities;

namespace YngStrs.Identity.Api.Configuration
{
    internal static class SeederDataContainer
    {
        internal static IEnumerable<IdentityResource> GetIdentityResources()
        {
            yield return new IdentityResources.OpenId();
            yield return new IdentityResources.Profile();
            yield return new IdentityResources.Email();
        }

        internal static IEnumerable<ApiResource> GetApis()
        {
            yield return new ApiResource("blog", "Blog API");
            yield return new ApiResource("chatbot", "Chatbot API");
            yield return new ApiResource("personalityTests", "Personality Tests API");
            yield return new ApiResource("global", "Global API Access");
            yield return new ApiResource("internal", "Internal API Access");
        }

        internal static IEnumerable<Client> GetClients()
        {
            yield return new Client
            {
                ClientId = "Mvc",
                ClientName = "Mvc",
                AllowedGrantTypes = { GrantType.ResourceOwnerPassword, GrantType.ClientCredentials },
                AllowOfflineAccess = true,
                ClientSecrets = { new Secret("06FD593F-3B8F-4DC9-8C3A-B829CAF954DA".Sha256()) },
                AllowedScopes = { "global", "user_environments", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.OfflineAccess }
            };

            yield return new Client
            {
                ClientId = "Microservice",
                ClientName = "Client for internal service communication",
                AllowedGrantTypes = { GrantType.ClientCredentials },
                ClientSecrets = { new Secret("DE7C9DD2-7871-4069-BBA0-F671873074DB".Sha256()) },
                AllowedScopes = { "internal" }
            };
        }

        private static User CreateTestUser(string firstName, string lastName)
        {
            var email = $"{firstName}{lastName}@test.test";
            return new User
            {
                FirstName = firstName,
                LastName = lastName,
                UserName = email,
                Email = email,
            };
        }
    }
}