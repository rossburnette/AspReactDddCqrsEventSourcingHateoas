using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands
{
    public class RegisterEventStream : ICommand
    {
        public Guid Identifier { get; set; }
    }
}