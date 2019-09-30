using System;

namespace YngStrs.PersonalityTests.Api.Domain.Views.UserQuestionAnswers
{
    public class UserAnswersStreamView
    {
        public UserAnswersStreamView(Guid userAnswersEventStreamId)
        {
            UserAnswersEventStreamId = userAnswersEventStreamId;
        }

        public Guid UserAnswersEventStreamId { get; }
    }
}