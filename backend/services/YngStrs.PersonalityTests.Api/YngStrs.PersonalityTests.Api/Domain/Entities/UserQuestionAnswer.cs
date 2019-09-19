using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a domain objects linked with the event -  user answer of question.
    /// </summary>
    public class UserQuestionAnswer : IAggregate
    {
        public UserQuestionAnswer()
        {
            
        }

        public UserQuestionAnswer(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }

        /// <!--References-->
        public Guid ChosenOptionId { get; set; }
    }
}