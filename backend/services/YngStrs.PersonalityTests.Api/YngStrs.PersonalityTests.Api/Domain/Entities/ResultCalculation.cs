using System;

namespace YngStrs.PersonalityTests.Api.Domain.Entities
{
    /// <summary>
    /// Domain object represents the result of the user profiling.
    /// </summary>
    /// <remarks>
    /// Linked with <see cref="UserTestResult"/>, <seealso cref=""/>.
    /// </remarks>
    public class ResultCalculation
    {
        public Guid TestResultId { get; set; }

        public double Percentage { get; set; }
    }
}