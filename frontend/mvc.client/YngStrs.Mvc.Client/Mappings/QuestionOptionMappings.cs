using AutoMapper;
using YngStrs.Mvc.Client.Models;
using YngStrs.Mvc.Client.Models.PersonalityTest;

namespace YngStrs.Mvc.Client.Mappings
{
    public class QuestionOptionMappings : Profile
    {
        public QuestionOptionMappings()
        {
            CreateMap<PersonalityTestServiceModel, QuestionOption>(MemberList.Destination);
        }
    }
}