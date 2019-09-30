using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Repositories;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class TestResultRepository : ITestResultRepository
    {
        private readonly PersonalityTestDbContext _dbContext;

        public TestResultRepository(PersonalityTestDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<TestResult> GetComplexPersonalityResultAsync() =>
            _dbContext
                .TestResults
                .FirstOrDefaultAsync(result => result.Value == "complex");
    }
}