using AutoMapper;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;
using YngStrs.PersonalityTests.Api.Domain.Views.QuestionOptions;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.QuestionOption
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<InitPersonalityTestView, QuestionOptionView>(MemberList.Destination)
                .ForMember(
                    dest => dest.Id,
                    opts => opts.MapFrom(src => src.OptionId))
                .ForMember(
                    dest => dest.Description,
                    opts => opts.MapFrom(src => src.OptionDescription))
                .ForMember(
                    dest => dest.ResultValue,
                    opts => opts.MapFrom(src => src.OptionResult));
        }
    }
}