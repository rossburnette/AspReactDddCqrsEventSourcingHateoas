using System;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserQuestionAnswer
{
    public class UserAnswersStreamResource : Resource
    {
        public Guid UserAnswersEventStreamId { get; set; }
    }
}