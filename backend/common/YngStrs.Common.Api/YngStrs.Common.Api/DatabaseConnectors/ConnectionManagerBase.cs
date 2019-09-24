using Npgsql;

namespace YngStrs.Common.Api.DatabaseConnectors
{
    public class ConnectionManagerBase
    {
        private static string ConnectionString { get; set; }

        public static NpgsqlConnection GetConnection()
        {
            return new NpgsqlConnection(ConnectionString);
        }

        public static void SetConnectionString(string connectionString)
        {
            ConnectionString = connectionString;
        }
    }
}