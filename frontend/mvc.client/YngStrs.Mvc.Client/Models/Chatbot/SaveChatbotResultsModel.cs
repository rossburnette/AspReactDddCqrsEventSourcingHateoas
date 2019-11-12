namespace YngStrs.Mvc.Client.Models.Chatbot
{
    public class SaveChatbotResultsModel
    {
        public SaveChatbotResultsModel()
        {
            
        }

        public SaveChatbotResultsModel(bool status)
        {
            Status = status;
            Errors = new string[0];
        }

        public bool Status { get; set; }

        public string[] Errors { get; set; }
    }
}