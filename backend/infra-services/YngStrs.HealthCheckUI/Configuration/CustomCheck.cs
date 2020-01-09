using System.Collections.Generic;

namespace YngStrs.HealthCheckUI.Configuration
{
    public class CustomCheck
    {
        public string Name { get; set; }
        public string DefaultUrl { get; set; }
        public Dictionary<string, string> Checks { get; set; }
    }
}