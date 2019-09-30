using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents question option, chosen by the current user of the application. 
    /// Technically, it is a domain object:
    /// 1) Considered as event sourced aggregate!
    /// 2) Linked with the event -  user answer of question!
    /// </summary>
    /// <remarks>
    /// The aggregate stream keeps track of the sequence of answers. 
    /// </remarks>
    public class UserQuestionAnswer : IAggregate
    {
        public UserQuestionAnswer()
        {
        }

        public UserQuestionAnswer(Guid id, string optionValue)
        {
            Id = id;
            OptionValue = optionValue;
        }

        public Guid Id { get; set; }

        public string OptionValue { get; set; }

        /// <!--References-->
        /// <see cref="QuestionOption"/>
        public Guid ChosenOptionId => Id;

        /// <!--Events-->
        public UserAnsweredQuestion TestQuestionAnswer() =>
            new UserAnsweredQuestion(ChosenOptionId, OptionValue);

        public void Apply(UserAnsweredQuestion @event)
        {
            Id = @event.ChosenOptionId;
            OptionValue = @event.OptionValue;
        }
    }
}