using AutoMapper;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;
using YngStrs.Identity.Api.Domain.Entities;
using YngStrs.Identity.Api.Domain.Views;

namespace YngStrs.Identity.Api.BoundedContexts.Auth
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Register, User>(MemberList.Source)
                .ForMember(d => d.UserName, opts => opts.MapFrom(s => s.Email))
                .ForSourceMember(s => s.Password, opts => opts.DoNotValidate());

            CreateMap<User, UserView>(MemberList.Destination);
        }
    }
}
