using System;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserSubmittedPersonalData : IEvent
    {
        public UserSubmittedPersonalData(Guid userIdentifier, string name, string email)
        {
            Email = email;
            UserIdentifier = userIdentifier;
            Name = name;
        }

        public Guid UserIdentifier { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }
    }
}