using System;
using System.Collections.Generic;
using YngStrs.Common.EventSourcing.Core;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Represents a cluster of domain objects (treated as a single unit), which occurs when a user finishes a test.
    /// </summary>
    public class UserTestResult : IAggregate
    {
        public UserTestResult()
        {
            
        }

        public UserTestResult(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }

        public string UserEmail { get; set; }

        /// <!--References-->
        public Guid PersonalityTestId { get; set; }

        public IList<ResultCalculation> TestResultsPercentage { get; set; } = new List<ResultCalculation>();

    }
}