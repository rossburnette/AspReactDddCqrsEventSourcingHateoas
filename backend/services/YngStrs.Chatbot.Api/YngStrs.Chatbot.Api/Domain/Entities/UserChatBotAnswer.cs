namespace YngStrs.Chatbot.Api.Domain.Entities
{
    /// <summary>
    /// A domain object that represents the pair: Chatbot Question / User Answer.
    /// </summary>
    public class UserChatBotAnswer
    {
        /// <summary>
        /// Chat-bot question.
        /// </summary>
        public string Question { get; set; }

        /// <summary>
        /// User answer.
        /// </summary>
        public object Answer { get; set; }
    }
}