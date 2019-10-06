using System;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.SQL;

namespace YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests
{
    /// <summary>
    /// Query from <see cref="PersonalityTestSqlQueries.InitialTest"/>.
    /// </summary>
    public class InitPersonalityTestView
    {
        /// <summary>
        /// <see cref="TestQuestion"/>.
        /// </summary>
        public Guid QuestionId { get; set; }

        /// <summary>
        /// <see cref="TestQuestion"/>.
        /// </summary>
        public int QuestionNumber { get; set; }

        /// <summary>
        /// <see cref="QuestionOption"/>.
        /// </summary>
        public Guid OptionId { get; set; }

        /// <summary>
        /// <see cref="QuestionOption"/>.
        /// </summary>
        public string OptionDescription { get; set; }

        /// <summary>
        /// <see cref="TestResult"/>.
        /// </summary>
        public string OptionResult { get; set; }

        /// <summary>
        /// <see cref="QuestionOption"/>.
        /// </summary>
        public bool IsTextOnly { get; set; }

        /// <summary>
        /// <see cref="OptionImageBinary"/>.
        /// </summary>
        public string Base64Image { get; set; }
    }
}