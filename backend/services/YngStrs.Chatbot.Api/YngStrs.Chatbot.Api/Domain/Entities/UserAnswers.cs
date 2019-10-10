using System;
using System.Collections.Generic;
using YngStrs.Chatbot.Api.Domain.Events;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.Domain.Entities
{
    /// <summary>
    /// Represents a collection of answers by the current user of the application.
    /// Technically, it is a domain object:
    /// 1) Considered as event sourced aggregate!
    /// 2) Linked with the event - user completed conversation with the chatbot!
    /// </summary>
    public class UserAnswers : IAggregate
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserAnswers"/> class.
        /// </summary>
        public UserAnswers()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="UserAnswers"/> class.
        /// </summary>
        public UserAnswers(IEnumerable<UserChatBotAnswer> answers)
        {
            Id = Guid.NewGuid();
            Answers = answers;
        }

        /// <summary>
        /// Aggregate identifier.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// User's chat-bot answers.
        /// </summary>
        public IEnumerable<UserChatBotAnswer> Answers { get; set; }

        /// <!--Events-->
        public UserSubmittedChatbotAnswers SubmitAnswers() => new UserSubmittedChatbotAnswers(Answers);

        public void Apply(UserSubmittedChatbotAnswers @event)
        {
            Id = Guid.NewGuid();
            Answers = @event.Answers;
        }
    }
}