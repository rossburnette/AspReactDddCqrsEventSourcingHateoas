using Microsoft.EntityFrameworkCore;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Persistence.EntityFramework
{
    /// <summary>
    /// Representation of relationship tables.
    /// </summary>
    public class PersonalityTestDbContext : DbContext
    {
        public PersonalityTestDbContext(DbContextOptions<PersonalityTestDbContext> options)
            : base(options)
        {            
        }

        /// <!--Dependency Hierarchy-->
        public DbSet<PersonalityTest> PersonalityTests { get; set; }

        public DbSet<Language> Languages { get; set; }

        public DbSet<TestQuestion> TestQuestions { get; set; }

        public DbSet<TestQuestionTitle> TestQuestionTitles { get; set; }

        public DbSet<QuestionOption> QuestionOptions { get; set; }

        public DbSet<QuestionOptionTitle> QuestionOptionTitles { get; set; }

        public DbSet<OptionImageBinary> OptionImageBinaries { get; set; }
    }
}