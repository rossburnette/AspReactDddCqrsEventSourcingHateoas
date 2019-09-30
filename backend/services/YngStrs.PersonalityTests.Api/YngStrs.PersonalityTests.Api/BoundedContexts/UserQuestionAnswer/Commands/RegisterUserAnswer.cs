using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserQuestionAnswer.Commands
{
    public class RegisterUserAnswer : ICommand
    {
        public Guid EventStreamId { get; set; }

        public Guid ChosenOptionId { get; set; }
    }
}