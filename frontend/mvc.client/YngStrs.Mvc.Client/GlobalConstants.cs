namespace YngStrs.Mvc.Client
{
    public static class GlobalConstants
    {
        public static class HttpClientNames
        {
            public const string TestClientName = "PersonalityTestClient";
            public const string ChatbotClientName = "ChatbotClient";
        }

        public static class PersonalityTestApiUrls
        {
            public const string GetStructuredUrlPath = "/api/personality-tests/structured";
        }

        public static class ChatbotApiUrls
        {
            public const string SaveUserResultsUrlPath = "/api/chatbot/save-results";
        }
    }
}