using Newtonsoft.Json;

namespace YngStrs.Mvc.Client.Models
{
    public class TestStats
    {
        [JsonProperty("action")]
        public int Action { get; set; }

        [JsonProperty("process")]
        public int Process { get; set; }

        [JsonProperty("people")]
        public int People { get; set; }

        [JsonProperty("idea")]
        public int Idea { get; set; }
    }
}