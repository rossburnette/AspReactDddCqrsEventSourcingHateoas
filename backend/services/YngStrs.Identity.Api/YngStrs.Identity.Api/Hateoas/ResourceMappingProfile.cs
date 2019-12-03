using AutoMapper;
using YngStrs.Identity.Api.Domain.Views;
using YngStrs.Identity.Api.Hateoas.Resources.LoginPrinciple;

namespace YngStrs.Identity.Api.Hateoas
{
    public class ResourceMappingProfile : Profile
    {
        public ResourceMappingProfile()
        {
            CreateMap<JwtView, LoginResource>(MemberList.Destination);
        }
    }
}