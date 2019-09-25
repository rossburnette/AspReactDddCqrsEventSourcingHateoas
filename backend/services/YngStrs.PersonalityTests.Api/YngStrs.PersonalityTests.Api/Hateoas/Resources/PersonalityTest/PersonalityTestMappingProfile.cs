using AutoMapper;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.PersonalityTest
{
    public class PersonalityTestMappingProfile : Profile
    {
        public PersonalityTestMappingProfile()
        {
            CreateMap<InitPersonalityTestView, PersonalityTestResource>(MemberList.Destination);
        }
    }
}