using System;
using System.Collections.Generic;
using YngStrs.Chatbot.Api.Domain.Entities;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.Domain.Events
{
    public class UserSubmittedChatbotAnswers : IEvent
    {
        public UserSubmittedChatbotAnswers(Guid userIdentifier, IEnumerable<UserChatBotAnswer> answers)
        {
            UserIdentifier = userIdentifier;
            Answers = answers;
        }

        public Guid UserIdentifier { get; set; }

        public IEnumerable<UserChatBotAnswer> Answers { get; set; }
    }
}