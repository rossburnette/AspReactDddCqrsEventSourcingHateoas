using System;

namespace YngStrs.Mvc.Client.Models
{
    public class QuestionOption
    {
        public int QuestionNumber { get; set; }

        public bool IsTextOnly { get; set; }

        public Guid OptionId { get; set; }

        public string OptionDescription { get; set; }

        public string Base64Image { get; set; }
    }
}