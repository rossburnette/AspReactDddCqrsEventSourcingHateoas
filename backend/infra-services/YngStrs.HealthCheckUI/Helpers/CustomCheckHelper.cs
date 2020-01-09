using System;
using System.Collections.Generic;
using YngStrs.HealthCheckUI.Configuration;
using YngStrs.HealthCheckUI.HealthChecks;

namespace YngStrs.HealthCheckUI.Helpers
{
    public class CustomCheckHelper
    {
        public static List<(string Name, MultipleBuildVersionsHealthCheck Check)> GetHealthChecks(
            List<CustomCheck> customChecks,
            Dictionary<string, string> baseUrls,
            List<string> customChecksOrder,
            int timeout)
        {
            if (customChecksOrder == null)
            {
                throw new ArgumentNullException(nameof(customChecksOrder));
            }

            var response = new List<(string Name, MultipleBuildVersionsHealthCheck Check)>();

            foreach (var customCheck in customChecks)
            {
                customCheck.Checks ??= new Dictionary<string, string>();

                if (customCheck.Checks.Count == 0 && !string.IsNullOrWhiteSpace(customCheck.DefaultUrl))
                {
                    foreach (var order in customChecksOrder)
                    {
                        customCheck.Checks.Add(order, customCheck.DefaultUrl);
                    }
                }

                if (customCheck.Checks.Count == 0)
                    continue;

                var checks = new List<(string Name, string Url)>();

                if (customChecksOrder.Count > 0
                    || customCheck.Checks.Count == 0)
                {
                    foreach (var order in customChecksOrder)
                    {
                        if (!customCheck.Checks.ContainsKey(order))
                            continue;

                        var url = customCheck.Checks[order];
                        if (baseUrls != null
                            && baseUrls.ContainsKey(order)
                            && !url.StartsWith("http://")
                            && !url.StartsWith("https://"))
                        {
                            var baseUrl = baseUrls[order];
                            url = UrlHelper.Combine(baseUrl, url);
                        }

                        checks.Add((order, url));
                    }
                }
                else
                {
                    foreach (var (key, value) in customCheck.Checks)
                    {
                        var url = value;
                        if (baseUrls != null
                            && !url.StartsWith("http://")
                            && !url.StartsWith("https://"))
                        {
                            var baseUrl = baseUrls[key];
                            url = UrlHelper.Combine(baseUrl, url);
                        }

                        checks.Add((key, url));
                    }
                }

                response.Add((customCheck.Name, new MultipleBuildVersionsHealthCheck(checks, timeout)));
            }

            return response;
        }
    }
}