using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.UserPersonalData.Commands;
using YngStrs.PersonalityTests.Api.Domain.Events;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a domain objects, linked with event
    /// that occurs when a user accepts terms and conditions and submits name and email.
    /// </summary>
    public class UserPersonalData : IAggregate
    {
        public UserPersonalData()
        {
            
        }
        public UserPersonalData(SubmitNecessaryData command)
        {
            Id = command.EventStreamId;
            Name = command.Name;
            Email = command.Email;
        }

        /// <summary>
        /// Current user identifier.
        /// Same as <see cref="UserSubmittedPersonalData"/> event stream ID.
        /// </summary>
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        /// <!--Events-->
        public UserSubmittedPersonalData SubmitNecessaryData() => 
            new UserSubmittedPersonalData(Id, Name, Email);

        public void Apply(UserSubmittedPersonalData @event)
        {
            Id = @event.UserIdentifier;
            Name = @event.Name;
            Email = @event.Email;
        }
    }
}