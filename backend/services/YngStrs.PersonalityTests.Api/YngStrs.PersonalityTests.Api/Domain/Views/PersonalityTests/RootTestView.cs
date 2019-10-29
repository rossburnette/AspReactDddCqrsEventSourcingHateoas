using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Views.TestQuestions;

namespace YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests
{
    /// <summary>
    /// Root view model for a personality test.
    /// </summary>
    public struct RootTestView
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RootTestView"/> struct.
        /// Basic constructor.
        /// </summary>
        /// <param name="testQuestions"></param>
        public RootTestView(List<TestQuestionView> testQuestions)
        {
            TestQuestions = testQuestions;
        }

        /// <summary>
        /// Structures test questions with options.
        /// </summary>
        public List<TestQuestionView> TestQuestions { get; }
    }
}