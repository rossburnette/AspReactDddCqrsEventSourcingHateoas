using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a cluster of domain objects (treated as a single unit),
    /// which occurs when a user accept terms and conditions amd submit name and email.
    /// </summary>
    public class UserPersonalData : IAggregate
    {
        public UserPersonalData(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        /// <!--Events-->
        public UserSubmittedPersonalData SubmitNecessaryData() => 
            new UserSubmittedPersonalData(Name, Email);

        public void Apply(UserSubmittedPersonalData @event)
        {
            Id = Guid.NewGuid();
            Name = @event.Name;
            Email = @event.Email;
        }
    }
}