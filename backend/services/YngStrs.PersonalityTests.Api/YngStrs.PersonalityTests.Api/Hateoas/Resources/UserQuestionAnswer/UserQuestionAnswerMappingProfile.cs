using AutoMapper;
using YngStrs.PersonalityTests.Api.Domain.Views.UserQuestionAnswers;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserQuestionAnswer
{
    public class UserQuestionAnswerMappingProfile : Profile
    {
        public UserQuestionAnswerMappingProfile()
        {
            CreateMap<UserAnswersStreamView, UserAnswersStreamResource>(MemberList.Destination);
        }
    }
}