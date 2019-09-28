using System.Collections.Generic;
using System.Threading.Tasks;
using YngStrs.Mvc.Client.Models;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IPersonalityTestsService
    {
        Task<IEnumerable<PersonalityTestQuestion>> GetAsync();
    }
}