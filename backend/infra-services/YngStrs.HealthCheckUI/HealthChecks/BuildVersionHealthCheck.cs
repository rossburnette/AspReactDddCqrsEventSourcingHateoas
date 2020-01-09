using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using YngStrs.HealthCheckUI.Configuration;
using YngStrs.HealthCheckUI.Helpers;

namespace YngStrs.HealthCheckUI.HealthChecks
{
    public class BuildVersionHealthCheck : IHealthCheck
    {
        private readonly string _baseUrl;
        private readonly YngStrsService _service;
        private readonly string _defaultBuildVersionPath;
        private readonly int _timeout;

        public BuildVersionHealthCheck(
            string baseUrl,
            YngStrsService service,
            string defaultBuildVersionPath,
            int timeout)
        {
            _baseUrl = baseUrl ?? throw new ArgumentNullException(nameof(baseUrl));
            _service = service ?? throw new ArgumentNullException(nameof(service));
            _defaultBuildVersionPath = defaultBuildVersionPath;
            _timeout = timeout;
        }

        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = new CancellationToken())
        {
            try
            {
                using var httpClient = new HttpClient
                {
                    Timeout = TimeSpan.FromSeconds(_timeout)
                };

                var resultResponse = string.Empty;
                var isHealthy = true;

                var internalBuildVersion = string.Empty;
                var externalBuildVersion = string.Empty;

                var buildVersionPath = !string.IsNullOrWhiteSpace(_service.BuildVersionPath) ?
                    _service.BuildVersionPath :
                    _defaultBuildVersionPath;

                if (!string.IsNullOrWhiteSpace(_service.ServiceName))
                {
                    var internalBaseUrl = _service.ServiceName;
                    if (!internalBaseUrl.StartsWith("http://")
                        || internalBaseUrl.StartsWith("https://"))
                    {
                        internalBaseUrl = $"http://{internalBaseUrl}";
                    }
                    if (!string.IsNullOrWhiteSpace(_service.ServicePort))
                    {
                        internalBaseUrl += $":{_service.ServicePort}";
                    }

                    var internalUrl = UrlHelper.Combine(internalBaseUrl, buildVersionPath);

                    try
                    {
                        var response = await httpClient.GetAsync(internalUrl, cancellationToken);

                        if (response.IsSuccessStatusCode)
                        {
                            internalBuildVersion = await response.Content.ReadAsStringAsync();
                        }
                        else
                        {
                            isHealthy = false;
                            resultResponse += $"Internal endpoint unhealthy with status code : {response.StatusCode} ({(int)response.StatusCode})";
                        }
                    }
                    catch (Exception e)
                    {
                        isHealthy = false;
                        resultResponse += $"Internal endpoint unhealthy with exception";
                    }
                }

                if (!string.IsNullOrWhiteSpace(_service.ApiGatewayPath))
                {
                    var externalUrl = UrlHelper.Combine(_baseUrl, _service.ApiGatewayPath, buildVersionPath);

                    try
                    {
                        var response = await httpClient.GetAsync(externalUrl, cancellationToken);

                        if (response.IsSuccessStatusCode)
                        {
                            externalBuildVersion = await response.Content.ReadAsStringAsync();
                        }
                        else
                        {
                            isHealthy = false;
                            if (!string.IsNullOrWhiteSpace(resultResponse))
                            {
                                resultResponse += " ; ";
                            }
                            resultResponse += $"External endpoint unhealthy with status code : {response.StatusCode} ({(int)response.StatusCode})";
                        }
                    }
                    catch (Exception e)
                    {
                        isHealthy = false;
                        resultResponse += $"External endpoint unhealthy with exception";
                    }
                }

                if (isHealthy)
                {
                    if (string.IsNullOrWhiteSpace(internalBuildVersion)
                        && string.IsNullOrWhiteSpace(externalBuildVersion))
                    {
                        isHealthy = false;
                        resultResponse = $"Cannot load the build version properly for service : {_service.Name}";
                    }

                    else if (!string.IsNullOrWhiteSpace(internalBuildVersion)
                             && !string.IsNullOrWhiteSpace(externalBuildVersion))
                    {
                        if (internalBuildVersion != externalBuildVersion)
                        {
                            isHealthy = false;
                            resultResponse = $"Versions conflict : {_service.Name}; Internal({internalBuildVersion}); External({externalBuildVersion})";
                        }
                        else
                        {
                            resultResponse = $"{internalBuildVersion} / External & Internal";
                        }
                    }
                    else if (!string.IsNullOrWhiteSpace(internalBuildVersion))
                    {
                        resultResponse = $"{internalBuildVersion} / Internal";
                    }
                    else
                    {
                        resultResponse = $"{externalBuildVersion} / External";
                    }
                }
                else
                {
                    if (!string.IsNullOrWhiteSpace(internalBuildVersion))
                    {
                        resultResponse += $" / Internal healthy: {internalBuildVersion}";
                    }
                    if (!string.IsNullOrWhiteSpace(externalBuildVersion))
                    {
                        resultResponse += $" / External healthy: {externalBuildVersion}";
                    }
                }

                return isHealthy ?
                    HealthCheckResult.Healthy(resultResponse) :
                    HealthCheckResult.Unhealthy(resultResponse);
            }
            catch (Exception)
            {
                return HealthCheckResult.Unhealthy("Exception occured");
            }
        }
    }
}