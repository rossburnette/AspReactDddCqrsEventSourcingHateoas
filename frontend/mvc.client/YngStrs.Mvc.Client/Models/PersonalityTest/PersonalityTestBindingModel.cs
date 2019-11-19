using Newtonsoft.Json;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class PersonalityTestBindingModel
    {

        [JsonProperty("testStats")]
        public TestStats TestStats { get; set; }

        [JsonProperty("testAnswers")]
        public TestAnswers TestAnswers { get; set; }
    }
}