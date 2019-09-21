using System;

namespace YngStrs.Common.Api.Loggers
{
    /// <summary>
    /// Ready-to-use data structure suitable for saved in database or log-file. 
    /// </summary>
    public class ExceptionLog
    {
        /// <summary>
        /// Entity identifier.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// <see cref="Microsoft.Extensions.Logging.LogLevel"/>.
        /// </summary>
        public string LogLevel { get; set; }

        /// <summary>
        /// User email.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Remote IP address from the connection.
        /// </summary>
        public string Host { get; set; }

        /// <summary>
        /// Remote port from the connection.
        /// </summary>
        public int Port { get; set; }

        /// <summary>
        /// Request path.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Request QueryString value (if exists).
        /// </summary>
        public string QueryString { get; set; }

        public string ExceptionType { get; set; }

        public string ExceptionMessage { get; set; }

        public DateTimeOffset DateTime { get; set; }

        public string RequestHttpMethod { get; set; }

        public int ResponseHttpStatusCode { get; set; }
    }
}