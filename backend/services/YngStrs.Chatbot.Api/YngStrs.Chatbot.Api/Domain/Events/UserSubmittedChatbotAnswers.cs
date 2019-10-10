using System.Collections.Generic;
using YngStrs.Chatbot.Api.Domain.Entities;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.Domain.Events
{
    public class UserSubmittedChatbotAnswers : IEvent
    {
        public UserSubmittedChatbotAnswers(IEnumerable<UserChatBotAnswer> answers)
        {
            Answers = answers;
        }

        public IEnumerable<UserChatBotAnswer> Answers { get; set; }
    }
}