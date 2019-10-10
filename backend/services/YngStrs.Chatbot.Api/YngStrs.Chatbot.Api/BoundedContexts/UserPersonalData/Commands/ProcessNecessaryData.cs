using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserPersonalData.Commands
{
    public class ProcessNecessaryData : ICommand
    {
        public ProcessNecessaryData(string rawData, Guid eventStreamId)
        {
            RawData = rawData;
            EventStreamId = eventStreamId;
        }

        public string RawData { get; set; }

        public Guid EventStreamId { get; set; }
    }
}