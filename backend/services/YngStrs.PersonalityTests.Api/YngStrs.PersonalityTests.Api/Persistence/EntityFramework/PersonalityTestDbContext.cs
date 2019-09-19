using Microsoft.EntityFrameworkCore;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Persistence.EntityFramework
{
    /// <inheritdoc />
    /// <summary>
    /// Representation of relationship database tables.
    /// </summary>
    public class PersonalityTestDbContext : DbContext
    {
        public PersonalityTestDbContext(DbContextOptions<PersonalityTestDbContext> options)
            : base(options)
        {            
        }

        /// <!--Dependency Hierarchy-->
        public DbSet<PersonalityTest> PersonalityTests { get; set; }

        public DbSet<TestResult> TestResults { get; set; }

        public DbSet<TestQuestion> TestQuestions { get; set; }

        public DbSet<QuestionOption> QuestionOptions { get; set; }

        public DbSet<OptionImageBinary> OptionImageBinaries { get; set; }

        public DbSet<Language> Languages { get; set; }

        public DbSet<TestResultTitle> TestResultTitles { get; set; }

        public DbSet<TestQuestionTitle> TestQuestionTitles { get; set; }

        public DbSet<QuestionOptionTitle> QuestionOptionTitles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigureGuidPrimaryKeys();

            modelBuilder.SpecifyTablesName();
            modelBuilder.SpecifyPersonalityTestColumnsMapping();
            modelBuilder.SpecifyTestResultColumnsMapping();
            modelBuilder.SpecifyTestQuestionColumnsMapping();
            modelBuilder.SpecifyQuestionOptionColumnsMapping();
            modelBuilder.SpecifyOptionImageBinaryColumnsMapping();
            modelBuilder.SpecifyLanguageColumnsMapping();
            modelBuilder.SpecifyTestResultTitleColumnsMapping();
            modelBuilder.SpecifyTestQuestionTitleColumnsMapping();
            modelBuilder.SpecifyQuestionOptionTitleColumnsMapping();

            modelBuilder.ConfigurePersonalityTestQuestionRelations();
            modelBuilder.ConfigureTestQuestionLanguageTitleRelations();
            modelBuilder.ConfigureTestQuestionOptionRelations();
            modelBuilder.ConfigureTestQuestionOptionLanguageTitleRelations();
            modelBuilder.ConfigureTestOptionImageBinaryRelations();

            base.OnModelCreating(modelBuilder);
        }
    }
}