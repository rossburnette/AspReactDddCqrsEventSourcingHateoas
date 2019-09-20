using System;
using System.Collections.Generic;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Configuration
{
    public class DatabaseSeeder
    {
        private static readonly List<Language> _languages = new List<Language>
        {
            new Language
            {
                CreatedOn = DateTimeOffset.Now,
                IsDeleted = false,
                EnglishName = "Bulgarian",
                
            }
        };
    }
}