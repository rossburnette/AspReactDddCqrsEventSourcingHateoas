using Marten;
using Microsoft.Extensions.Configuration;

namespace YngStrs.Chatbot.Api.Configuration
{
    internal class DatabaseConfiguration
    {
        internal static void EnsureEventStoreIsCreated(IConfiguration configuration)
        {
            DocumentStore.For(options =>
            {
                options.Connection(configuration.GetSection("EventStore")["ConnectionString"]);
                options.CreateDatabasesForTenants(c =>
                {
                    c.ForTenant()
                        .CheckAgainstPgDatabase()
                        .WithOwner("postgres")
                        .WithEncoding("UTF-8")
                        .ConnectionLimit(-1);
                });
            });
        }
    }
}