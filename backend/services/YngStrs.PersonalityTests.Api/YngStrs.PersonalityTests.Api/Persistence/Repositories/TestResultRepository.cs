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
                .Include(result => result.TestResultTitles)
                .FirstOrDefaultAsync(result => result.Value == "complex");

        public Task<TestResult> GetByValueAsync(string value) =>
            _dbContext
                .TestResults
                .Include(result => result.TestResultTitles)
                .FirstOrDefaultAsync(result => result.Value == value);
    }
}