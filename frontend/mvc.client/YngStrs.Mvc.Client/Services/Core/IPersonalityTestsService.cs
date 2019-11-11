using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YngStrs.Mvc.Client.Models.PersonalityTest;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IPersonalityTestsService
    {
        Task<Guid> GetAnswersEventStreamIdAsync();

        Task<StructuredTestServiceModel> GetStructuredAsync();
    }
}