namespace YngStrs.Mvc.Client.Models
{
    public class ResultsStatusModel
    {
        public ResultsStatusModel(bool status)
        {
            Status = status;
            Errors = new string[0];
        }

        public bool Status { get; set; }

        public string[] Errors { get; set; }
    }
}