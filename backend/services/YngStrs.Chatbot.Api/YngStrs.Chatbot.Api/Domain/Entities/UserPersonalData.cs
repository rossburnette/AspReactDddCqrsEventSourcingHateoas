using System;
using YngStrs.Chatbot.Api.Domain.Events;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.Chatbot.Api.Domain.Entities
{
    /// <summary>
    /// Represents a domain objects, linked with event
    /// that occurs when a user  completed conversation with the chatbot,
    /// accepts terms and conditions and submits name and email.
    /// </summary>
    public class UserPersonalData : IAggregate
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserPersonalData"/> class.
        /// </summary>
        public UserPersonalData()
        {
        }

        /// <summary>
        /// Aggregate identifier.
        /// </summary>
        public Guid Id { get; set; }

        public Guid UserIdentifier { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        /// <!--Events-->
        public UserSubmittedPersonalData SubmitNecessaryData() =>
            new UserSubmittedPersonalData(UserIdentifier, Name, Email);

        public void Apply(UserSubmittedPersonalData @event)
        {
            Id = Guid.NewGuid();
            UserIdentifier = @event.UserIdentifier;
            Name = @event.Name;
            Email = @event.Email;
        }
    }
}