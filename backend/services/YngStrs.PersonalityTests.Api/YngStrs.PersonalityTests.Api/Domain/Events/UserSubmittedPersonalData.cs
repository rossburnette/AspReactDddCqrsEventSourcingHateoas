using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    public class UserSubmittedPersonalData : IEvent
    {
        public UserSubmittedPersonalData(string name, string email)
        {
            Email = email;
            Name = name;
        }

        public string Name { get; set; }

        public string Email { get; set; }
    }
}