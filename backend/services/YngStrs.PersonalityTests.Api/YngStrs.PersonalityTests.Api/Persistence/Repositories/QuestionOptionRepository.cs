using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using YngStrs.PersonalityTests.Api.Domain.Entities;
using YngStrs.PersonalityTests.Api.Domain.Repositories;
using YngStrs.PersonalityTests.Api.Persistence.EntityFramework;

namespace YngStrs.PersonalityTests.Api.Persistence.Repositories
{
    public class QuestionOptionRepository : IQuestionOptionRepository
    {
        private readonly PersonalityTestDbContext _dbContext;

        public QuestionOptionRepository(PersonalityTestDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<QuestionOption> GetByIdAsync(Guid id) =>
            _dbContext
                .QuestionOptions
                .AsNoTracking()
                .FirstOrDefaultAsync(option => option.Id == id);
    }
}