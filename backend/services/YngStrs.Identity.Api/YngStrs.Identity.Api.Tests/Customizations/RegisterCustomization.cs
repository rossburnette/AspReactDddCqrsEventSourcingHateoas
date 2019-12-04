using System;
using AutoFixture;
using YngStrs.Identity.Api.BoundedContexts.Auth.Commands;

namespace YngStrs.Identity.Api.Tests.Customizations
{
    public class RegisterCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customize<Register>(composer =>
                composer.FromFactory(() => new Register
                    {
                        Email = $"Email{Guid.NewGuid()}@example.com"
                    })
                    .Without(r => r.Email));
        }
    }
}