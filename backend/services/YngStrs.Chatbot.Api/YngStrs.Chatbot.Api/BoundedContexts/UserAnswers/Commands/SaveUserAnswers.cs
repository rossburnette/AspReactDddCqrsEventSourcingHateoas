using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Commands
{
    public class SaveUserAnswers : ICommand
    {
        public string Res { get; set; }

        public string Form { get; set; }

        public Guid EventStreamId { get; set; }
    }
}