using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Events;

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
        public Guid ChosenOptionId => Id;

        /// <!--Events-->
        public UserAnsweredQuestion TestQuestionAnswer() =>
            new UserAnsweredQuestion(ChosenOptionId);

        public void Apply(UserAnsweredQuestion @event)
        {
            Id = @event.ChosenOptionId;
        }
    }
}