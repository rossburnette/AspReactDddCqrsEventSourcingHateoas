using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Services
{
    public class UserResultStatAnalyzer
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserResultStatAnalyzer"/> class.
        /// </summary>
        /// <param name="userResults"></param>
        public UserResultStatAnalyzer(TestResultStatistics userResults)
        {
            var dictionary = new Dictionary<string, int>
            {
                { nameof(userResults.Action).ToLower(), userResults.Action },
                { nameof(userResults.Idea).ToLower(), userResults.Idea },
                { nameof(userResults.People).ToLower(), userResults.People },
                { nameof(userResults.Process).ToLower(), userResults.Process }
            };

            ValuePairs = dictionary.OrderByDescending(pair => pair.Value).ToList();
        }

        /// <summary>
        /// Structured user result values.
        /// </summary>
        public List<KeyValuePair<string, int>> ValuePairs { get; }

        /// <summary>
        /// Algorithm for extracting the most common result.
        /// </summary>
        /// <remarks>
        /// In this context 'firstSchemeCount', 'secondSchemeCount'
        /// are the most relevant schemes of the user.
        /// </remarks>
        public string[] GetTopResults()
        {
            var firstSchemeCount = ValuePairs[0].Value;
            var secondSchemeCount = ValuePairs[1].Value;
            var thirdSchemeCount = ValuePairs[2].Value;

            if (firstSchemeCount > secondSchemeCount)
            {
                return new[] { ValuePairs[0].Key };
            }

            if (firstSchemeCount == secondSchemeCount &&
                secondSchemeCount == thirdSchemeCount)
            {
                return new[] { "complex" };
            }

            return new[] { ValuePairs[0].Key, ValuePairs[1].Key };
        }
    }
}