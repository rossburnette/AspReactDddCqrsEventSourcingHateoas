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
                { userResults.Process, nameof(userResults.Process).ToLower() },
            };

            ValuesDictionary = dictionary.ToImmutableSortedDictionary();
        }

        /// <summary>
        /// Structured user result values.
        /// </summary>
        public ImmutableSortedDictionary<int, string> ValuesDictionary { get; }
    }
}