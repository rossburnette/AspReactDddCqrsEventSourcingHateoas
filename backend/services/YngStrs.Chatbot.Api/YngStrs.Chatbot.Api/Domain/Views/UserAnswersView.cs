using System;
using System.Collections.Generic;
using YngStrs.Chatbot.Api.Domain.Entities;

namespace YngStrs.Chatbot.Api.Domain.Views
{
    public class UserAnswersView
    {
        public Guid AggregateId { get; set; }

        public Guid UserIdentifier { get; set; }

        public IEnumerable<UserChatBotAnswer> QuestionsAnswers { get; set; }
    }
}
