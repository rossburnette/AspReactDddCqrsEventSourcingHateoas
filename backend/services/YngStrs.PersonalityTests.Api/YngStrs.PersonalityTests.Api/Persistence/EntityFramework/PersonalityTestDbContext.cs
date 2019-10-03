using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common.Api.Entities.Core;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Persistence.EntityFramework
{
    /// <inheritdoc />
    /// <summary>
    /// Representation of relationship database.
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

        public DbSet<CommonQuestionTitle> CommonQuestionTitles { get; set; }

        public DbSet<TestQuestionTitle> TestQuestionTitles { get; set; }

        public DbSet<QuestionOptionTitle> QuestionOptionTitles { get; set; }

        public DbSet<ResultOptionMap> ResultOptionMaps { get; set; }

        /// <!--Overrides-->
        /// <inheritdoc />
        public override int SaveChanges()
        {
            ApplyAuditInfoRules();
            return base.SaveChanges();
        }

        /// <inheritdoc />
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            ApplyAuditInfoRules();
            return base.SaveChangesAsync(cancellationToken);
        }

        /// <!--Model Creating-->
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
            modelBuilder.SpecifyCommonQuestionTitleColumnsMapping();
            modelBuilder.SpecifyTestQuestionTitleColumnsMapping();
            modelBuilder.SpecifyQuestionOptionTitleColumnsMapping();
            modelBuilder.SpecifyResultOptionMapColumnsMapping();

            modelBuilder.ConfigurePersonalityTestResultRelations();
            modelBuilder.ConfigureTestResultLanguageTitleRelations();

            modelBuilder.ConfigurePersonalityTestQuestionRelations();
            modelBuilder.ConfigureCommonTestQuestionLanguageTitleRelations();
            modelBuilder.ConfigureTestQuestionTitleRelations();

            modelBuilder.ConfigureTestQuestionOptionRelations();
            modelBuilder.ConfigureTestQuestionOptionLanguageTitleRelations();
            modelBuilder.ConfigureQuestionOptionImageBinaryRelations();
            modelBuilder.ConfigureTestResultQuestionOptionRelations();

            base.OnModelCreating(modelBuilder);
        }

        /// <!--Helpers-->
        private void ApplyAuditInfoRules()
        {
            var changedEntries = ChangeTracker
                .Entries()
                .Where(entry => entry.Entity is IAuditInfo &&
                                (entry.State == EntityState.Added ||
                                 entry.State == EntityState.Modified));

            foreach (var changedEntry in changedEntries)
            {
                var entity = (IAuditInfo)changedEntry.Entity;
                if (changedEntry.State == EntityState.Added &&
                    entity.CreatedOn == default)
                {
                    entity.CreatedOn = DateTimeOffset.Now;
                }
                else
                {
                    entity.ModifiedOn = DateTimeOffset.Now;
                }
            }
        }
    }
}