using AutoMapper;
using YngStrs.Mvc.Client.Models;

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