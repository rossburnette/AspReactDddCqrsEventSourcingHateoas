using System.Net.Mail;
using AutoFixture;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;

namespace YngStrs.Identity.Api.Tests.Customizations
{
    public class LoginCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customize<Login>(composer =>
                composer.With(c => c.Email, fixture.Create<MailAddress>().Address));
        }
    }
}