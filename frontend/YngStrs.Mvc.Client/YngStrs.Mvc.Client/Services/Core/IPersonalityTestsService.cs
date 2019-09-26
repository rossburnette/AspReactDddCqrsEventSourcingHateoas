using System.Collections.Generic;
using System.Threading.Tasks;
using Optional;
using YngStrs.Mvc.Client.Models;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IPersonalityTestsService
    {
        Task<Option<IEnumerable<PersonalityTest>, Error>> GetAsync();
    }
}