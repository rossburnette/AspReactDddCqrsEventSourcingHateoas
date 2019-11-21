using System.Collections.Generic;
using System.Linq;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Services
{
    public class UserResultStatAnalyzer
    {
        private readonly IOrderedEnumerable<KeyValuePair<string, int>> _valuePairs;

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
                { nameof(userResults.Process).ToLower(), userResults.Process },
            };

            _valuePairs = dictionary.OrderBy(pair => pair.Value);
        }
    }
}