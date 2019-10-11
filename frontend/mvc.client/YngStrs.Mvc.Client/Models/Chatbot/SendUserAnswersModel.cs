using System;

namespace YngStrs.Mvc.Client.Models.Chatbot
{
    public class SendUserAnswersModel : ChatbotResultsRootObject
    {
        public SendUserAnswersModel(ChatbotResultsRootObject rootObject, Guid eventStreamId)
        {
            Form = rootObject.Form;
            Res = rootObject.Res;
            EventStreamId = eventStreamId;
        }

        public Guid EventStreamId { get; set; }
    }
}