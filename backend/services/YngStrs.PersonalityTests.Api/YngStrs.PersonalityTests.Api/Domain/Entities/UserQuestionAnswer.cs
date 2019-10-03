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

        public UserQuestionAnswer(Guid userIdentifier, Guid chosenOptionId, Guid testResultId)
        {
            Id = Guid.NewGuid();
            UserIdentifier = userIdentifier;
            ChosenOptionId = chosenOptionId;
            TestResultId = testResultId;
        }

        public Guid Id { get; set; }

        /// <remarks>
        /// Same as <see cref="UserAnsweredQuestion"/> event stream!
        /// </remarks>
        public Guid UserIdentifier { get; set; }

        /// <!--References-->
        /// <summary>
        /// <see cref="QuestionOption"/> identifier (ID).
        /// </summary>
        public Guid ChosenOptionId { get; set; }

        /// <summary>
        /// <see cref="TestResult"/> identifier (ID).
        /// </summary>
        public Guid TestResultId { get; set; }

        /// <!--Events-->
        public UserAnsweredQuestion TestQuestionAnswer() =>
            new UserAnsweredQuestion(UserIdentifier, ChosenOptionId, TestResultId);

        public void Apply(UserAnsweredQuestion @event)
        {
            Id = Guid.NewGuid();
            UserIdentifier = @event.UserIdentifier;
            ChosenOptionId = @event.ChosenOptionId;
            TestResultId = @event.TestResultId;
        }
    }
}