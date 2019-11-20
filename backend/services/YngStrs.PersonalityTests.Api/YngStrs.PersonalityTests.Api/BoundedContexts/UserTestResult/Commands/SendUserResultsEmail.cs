namespace YngStrs.PersonalityTests.Api.BoundedContexts.UserTestResult.Commands
{
    public class SendUserResultsEmail
    {
        public SendUserResultsEmail(string emailAddressTo, string body)
        {
            EmailAddressTo = emailAddressTo;
            Body = body;
            Subject = "Твоите силни страни и подходящи позиции за теб!";
        }

        public string EmailAddressTo { get; set; }

        public string Subject { get; set; }

        public string Body { get; set; }
    }
}