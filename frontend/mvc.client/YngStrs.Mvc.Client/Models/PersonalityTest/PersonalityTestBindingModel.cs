using Newtonsoft.Json;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class PersonalityTestBindingModel
    {

        [JsonProperty("testStats")]
        public TestStats testStats { get; set; }

        [JsonProperty("testAnswers")]
        public TestAnswers testAnswers { get; set; }
    }
}