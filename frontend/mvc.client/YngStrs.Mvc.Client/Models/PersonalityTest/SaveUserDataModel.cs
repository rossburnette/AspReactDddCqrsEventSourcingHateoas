using System;

namespace YngStrs.Mvc.Client.Models.PersonalityTest
{
    public class SaveUserDataModel : UserDataModel
    {
        public SaveUserDataModel(UserDataModel dataModel, Guid userEventStreamId)
        {
            UserEventStreamId = userEventStreamId;
            Email = dataModel.Email;
            Name = dataModel.Name;
        }

        public Guid UserEventStreamId { get; set; }
    }
}