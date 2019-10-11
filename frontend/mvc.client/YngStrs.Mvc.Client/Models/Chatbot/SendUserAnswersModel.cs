using System;

namespace YngStrs.Mvc.Client.Models.Chatbot
{
    public class SendUserAnswersModel : ChatbotResultsRootObject
    {
        public SendUserAnswersModel(ChatbotResultsRootObject rootObject, Guid eventStreamId)
        {
            form = rootObject.form;
            res = rootObject.res;
            EventStreamId = eventStreamId;
        }

        public Guid EventStreamId { get; set; }
    }
}