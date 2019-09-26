using System;
using System.Collections.Generic;

namespace YngStrs.Mvc.Client.Models
{
    public class PersonalityTestQuestion
    {
        public Guid QuestionId { get; set; }

        public List<QuestionOption> QuestionOptions { get; set; }
    }
}