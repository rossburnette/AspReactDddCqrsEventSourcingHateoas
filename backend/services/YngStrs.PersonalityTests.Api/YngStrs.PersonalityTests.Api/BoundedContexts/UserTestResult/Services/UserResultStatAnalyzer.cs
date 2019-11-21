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
            var dictionary = new SortedDictionary<int, string>
            {
                { userResults.Action, nameof(userResults.Action).ToLower() },
                { userResults.Idea, nameof(userResults.Idea).ToLower() },
                { userResults.People, nameof(userResults.People).ToLower() },
                { userResults.Process, nameof(userResults.Process).ToLower() }
            };

            ValuesDictionary = dictionary.ToImmutableSortedDictionary();
        }

        /// <summary>
        /// Structured user result values.
        /// </summary>
        public ImmutableSortedDictionary<int, string> ValuesDictionary { get; }

        /// <summary>
        /// Algorithm for extracting the most common result.
        /// </summary>
        /// <remarks>
        /// In this context 'firsSchemeCount', 'secondSchemeCount'
        /// are the most relevant schemes of the user.
        /// </remarks>
        public string[] GetTopResults()
        {
            var keyValuePairs = ValuesDictionary.ToList();

            var firsSchemeCount = keyValuePairs[3].Key;
            var secondSchemeCount = keyValuePairs[2].Key;
            var thirdSchemeCount = keyValuePairs[1].Key;

            if (firsSchemeCount > secondSchemeCount)
            {
                return new[] { keyValuePairs[3].Value };
            }

            if (firsSchemeCount == secondSchemeCount &&
                secondSchemeCount == thirdSchemeCount)
            {
                return new[] { "complex" };
            }

            return new[] { keyValuePairs[3].Value, keyValuePairs[2].Value };
        }
    }
}