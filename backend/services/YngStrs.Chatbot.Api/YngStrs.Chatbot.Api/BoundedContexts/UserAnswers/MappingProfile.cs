using AutoMapper;
using YngStrs.Chatbot.Api.Domain.Views;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Domain.Entities.UserAnswers, UserAnswersView>(MemberList.None)
                .ForMember(
                dest => dest.QuestionsAnswers,
                opts => opts.MapFrom(src => src.Answers))
                .ForMember(
                dest => dest.AggregateId,
                opts => opts.MapFrom(src => src.Id));
        }
    }
}
