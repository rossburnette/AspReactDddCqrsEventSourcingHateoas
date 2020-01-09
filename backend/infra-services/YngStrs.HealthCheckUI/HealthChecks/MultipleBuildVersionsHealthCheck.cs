using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace YngStrs.HealthCheckUI.HealthChecks
{
    public class MultipleBuildVersionsHealthCheck : IHealthCheck
    {
        private readonly List<(string Name, string Url)> _checks;
        private readonly int _timeout;

        public MultipleBuildVersionsHealthCheck(List<(string Name, string Url)> checks, int timeout)
        {
            _checks = checks ?? throw new ArgumentNullException(nameof(checks));
            _timeout = timeout;
        }

        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = new CancellationToken())
        {
            try
            {
                var buildVersions = new List<(string Name, string BuildVersion)>();
                foreach (var (name, url) in _checks)
                {
                    buildVersions.Add((name, await GetBuildVersion(url)));
                }

                var isHealthy = buildVersions.All(x => !string.IsNullOrWhiteSpace(x.BuildVersion));
                var message = string.Join(" - ",
                    buildVersions.Select(x => $"{x.Name.ToUpperInvariant()}({(string.IsNullOrWhiteSpace(x.BuildVersion) ? "Unhealthy" : x.BuildVersion)})")
                );

                return isHealthy ? HealthCheckResult.Healthy(message) : HealthCheckResult.Unhealthy(message);
            }
            catch
            {
                return HealthCheckResult.Unhealthy("Exception occured");
            }
        }

        private async Task<string> GetBuildVersion(string url)
        {
            try
            {
                using var httpClient = new HttpClient
                {
                    Timeout = TimeSpan.FromSeconds(_timeout)
                };

                var response = await httpClient.GetAsync(url);

                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsStringAsync();
                }
            }
            catch (Exception)
            {
                throw;
            }

            return null;
        }
    }
}