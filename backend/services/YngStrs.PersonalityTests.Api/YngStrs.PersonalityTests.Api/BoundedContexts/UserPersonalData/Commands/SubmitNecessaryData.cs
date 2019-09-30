using System;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands
{
    public class SubmitNecessaryData : ICommand
    {
        public Guid EventStreamId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }
    }
}