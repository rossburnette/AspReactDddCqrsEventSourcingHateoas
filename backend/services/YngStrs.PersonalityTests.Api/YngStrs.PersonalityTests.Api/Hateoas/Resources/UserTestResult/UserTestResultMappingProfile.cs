using AutoMapper;
using YngStrs.PersonalityTests.Api.Domain.Views.UserTestResult;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserTestResult
{
    public class UserTestResultMappingProfile : Profile
    {
        public UserTestResultMappingProfile()
        {
            CreateMap<UserTestResultView, UserTestResultResource>(MemberList.Destination);
        }
    }
}