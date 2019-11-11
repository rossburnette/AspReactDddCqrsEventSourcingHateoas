using System;
using System.Collections.Generic;
using YngStrs.Mvc.Client.Models.QuestionOption;

namespace YngStrs.Mvc.Client.Models.TestQuestion
{
    public class TestQuestionServiceModel
    {
        /// <summary>
        /// Test Question ID.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Test Question Options.
        /// </summary>
        public List<QuestionOptionServiceModel> Options { get; set; }
    }
}