using System.Threading.Tasks;
using YngStrs.Mvc.Client.Models.PersonalityTest;

namespace YngStrs.Mvc.Client.Services.Core
{
    public interface IPersonalityTestsService
    {
        Task<PersonalityTestViewModel> GetPersonalityTestAsync();

        Task<StructuredTestServiceModel> FetchStructuredAsync();
    }
}