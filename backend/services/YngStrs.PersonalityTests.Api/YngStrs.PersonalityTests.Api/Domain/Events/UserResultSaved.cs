using System;
using YngStrs.Common.EventSourcing.Core;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Domain.Events
{
    /// <summary>
    /// An event linked with user finishes a personality test.
    /// </summary>
    public class UserResultSaved : IEvent
    {
        public UserResultSaved(
            TestResultStatistics resultStatistics,
            UserAnswersCollection answersCollection,
            Guid userIdentifier)
        {
            ResultStatistics = resultStatistics;
            AnswersCollection = answersCollection;
            UserIdentifier = userIdentifier;
        }

        public TestResultStatistics ResultStatistics { get; set; }

        public UserAnswersCollection AnswersCollection { get; set; }

        public Guid UserIdentifier { get; set; }
    }
}