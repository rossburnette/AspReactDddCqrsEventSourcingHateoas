using Microsoft.EntityFrameworkCore;
using YngStrs.PersonalityTests.Api.Domain.Entities;

namespace YngStrs.PersonalityTests.Api.Persistence.EntityFramework
{
    /// <summary>
    /// Relational database configuration via Entity Framework Code First Fluent API.
    /// </summary>
    internal static class OnModelCreatingConfiguration
    {
        internal static void ConfigureGuidPrimaryKeys(this ModelBuilder builder)
        {
            builder
                .Entity<PersonalityTest>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<TestResult>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<TestResultTitle>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<TestQuestion>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<QuestionOption>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<OptionImageBinary>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<Language>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<CommonQuestionTitle>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<TestQuestionTitle>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<QuestionOptionTitle>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder
                .Entity<ResultOptionMap>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();
        }

        /// <summary>
        /// Keeps the PostgreSQL naming conventions.
        /// </summary>
        /// <param name="builder">
        /// Configures database metadata:
        /// shape of the entities, the relationships between them and how they map to the database.
        /// </param>
        internal static void SpecifyTablesName(this ModelBuilder builder)
        {
            builder.Entity<PersonalityTest>().ToTable("personality_tests");

            builder.Entity<TestResult>().ToTable("test_results");
            builder.Entity<TestResultTitle>().ToTable("test_result_titles");

            builder.Entity<Language>().ToTable("languages");

            builder.Entity<TestQuestion>().ToTable("test_questions");
            builder.Entity<TestQuestionTitle>().ToTable("test_question_titles");
            builder.Entity<CommonQuestionTitle>().ToTable("common_question_titles");

            builder.Entity<QuestionOption>().ToTable("question_options");
            builder.Entity<OptionImageBinary>().ToTable("option_image_binaries");
            builder.Entity<QuestionOptionTitle>().ToTable("question_option_titles");

            builder.Entity<ResultOptionMap>().ToTable("result_option_maps");

        }

        internal static void SpecifyPersonalityTestColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<PersonalityTest>()
                .Property(test => test.Id)
                .HasColumnName("id");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.CustomerId)
                .HasColumnName("customer_id");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.Description)
                .HasColumnName("description");

            builder
                .Entity<PersonalityTest>()
                .Property(test => test.IsShared)
                .HasColumnName("is_shared");
        }

        internal static void SpecifyTestResultColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<TestResult>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<TestResult>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<TestResult>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<TestResult>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<TestResult>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<TestResult>()
                .Property(x => x.Value)
                .HasColumnName("value");

            builder
                .Entity<TestResult>()
                .Property(x => x.PersonalityTestId)
                .HasColumnName("personality_test_id");
        }

        internal static void SpecifyTestQuestionColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<TestQuestion>()
                .Property(question => question.Id)
                .HasColumnName("id");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.PersonalityTestId)
                .HasColumnName("personality_test_id");

            builder
                .Entity<TestQuestion>()
                .Property(question => question.SerialNumber)
                .HasColumnName("serial_number");
        }

        internal static void SpecifyQuestionOptionColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<QuestionOption>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.IsTextOnly)
                .HasColumnName("is_text_only");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.OptionImageBinaryId)
                .HasColumnName("option_image_binary_id");

            builder
                .Entity<QuestionOption>()
                .Property(x => x.TestQuestionId)
                .HasColumnName("test_question_id");
        }

        internal static void SpecifyOptionImageBinaryColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.Description)
                .HasColumnName("description");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.FileName)
                .HasColumnName("file_name");

            builder
                .Entity<OptionImageBinary>()
                .Property(x => x.ImageData)
                .HasColumnName("image_data");
        }

        internal static void SpecifyLanguageColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<Language>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<Language>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<Language>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<Language>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<Language>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<Language>()
                .Property(x => x.EnglishName)
                .HasColumnName("english_name");

            builder
                .Entity<Language>()
                .Property(x => x.NativeName)
                .HasColumnName("native_name");

            builder
                .Entity<Language>()
                .Property(x => x.EnumValue)
                .HasColumnName("enum_value");
        }

        internal static void SpecifyTestResultTitleColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<TestResultTitle>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.Description)
                .HasColumnName("description");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.Explanation)
                .HasColumnName("explanation");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.LanguageId)
                .HasColumnName("language_id");

            builder
                .Entity<TestResultTitle>()
                .Property(x => x.TestResultId)
                .HasColumnName("test_result_id");
        }

        internal static void SpecifyCommonQuestionTitleColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.Description)
                .HasColumnName("description");

            builder
                .Entity<CommonQuestionTitle>()
                .Property(x => x.LanguageId)
                .HasColumnName("language_id");
        }

        internal static void SpecifyTestQuestionTitleColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.CommonQuestionTitleId)
                .HasColumnName("common_question_title_id");

            builder
                .Entity<TestQuestionTitle>()
                .Property(x => x.TestQuestionId)
                .HasColumnName("test_question_id");
        }

        internal static void SpecifyQuestionOptionTitleColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.Description)
                .HasColumnName("description");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.LanguageId)
                .HasColumnName("language_id");

            builder
                .Entity<QuestionOptionTitle>()
                .Property(x => x.QuestionOptionId)
                .HasColumnName("question_option_id");
        }

        internal static void SpecifyResultOptionMapColumnsMapping(this ModelBuilder builder)
        {
            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.Id)
                .HasColumnName("id");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.CreatedOn)
                .HasColumnName("created_on");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.DeletedOn)
                .HasColumnName("deleted_on");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.IsDeleted)
                .HasColumnName("is_deleted");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.ModifiedOn)
                .HasColumnName("modified_on");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.QuestionOptionId)
                .HasColumnName("question_option_id");

            builder
                .Entity<ResultOptionMap>()
                .Property(x => x.TestResultId)
                .HasColumnName("test_result_id");
        }

        /// <!--Relations configuration-->
        internal static void ConfigurePersonalityTestResultRelations(this ModelBuilder builder)
        {
            builder
                .Entity<TestResult>()
                .HasOne(result => result.PersonalityTest)
                .WithMany(personalityTest => personalityTest.TestResults)
                .HasForeignKey(result => result.PersonalityTestId);
        }

        internal static void ConfigureTestResultLanguageTitleRelations(this ModelBuilder builder)
        {
            builder
                .Entity<TestResultTitle>()
                .HasOne(title => title.TestResult)
                .WithMany(result => result.TestResultTitles)
                .HasForeignKey(title => title.TestResultId);

            builder
                .Entity<TestResultTitle>()
                .HasOne(title => title.Language)
                .WithMany(language => language.TestResultTitles)
                .HasForeignKey(title => title.LanguageId);
        }

        internal static void ConfigurePersonalityTestQuestionRelations(this ModelBuilder builder)
        {
            builder
                .Entity<TestQuestion>()
                .HasOne(question => question.PersonalityTest)
                .WithMany(personalityTest => personalityTest.TestQuestions)
                .HasForeignKey(question => question.PersonalityTestId);
        }

        internal static void ConfigureCommonTestQuestionLanguageTitleRelations(this ModelBuilder builder)
        {
            builder
                .Entity<CommonQuestionTitle>()
                .HasOne(title => title.Language)
                .WithMany(language => language.CommonQuestionTitles)
                .HasForeignKey(title => title.LanguageId);
        }

        internal static void ConfigureTestQuestionTitleRelations(this ModelBuilder builder)
        {
            builder
                .Entity<TestQuestionTitle>()
                .HasOne(title => title.TestQuestion)
                .WithMany(question => question.TestQuestionTitles)
                .HasForeignKey(title => title.TestQuestionId);

            builder
                .Entity<TestQuestionTitle>()
                .HasOne(title => title.CommonQuestionTitle)
                .WithMany(language => language.TestQuestionTitles)
                .HasForeignKey(title => title.CommonQuestionTitleId);
        }

        internal static void ConfigureTestQuestionOptionRelations(this ModelBuilder builder)
        {
            builder
                .Entity<QuestionOption>()
                .HasOne(option => option.TestQuestion)
                .WithMany(question => question.QuestionOptions)
                .HasForeignKey(option => option.TestQuestionId);
        }

        internal static void ConfigureTestQuestionOptionLanguageTitleRelations(this ModelBuilder builder)
        {
            builder
                .Entity<QuestionOptionTitle>()
                .HasOne(title => title.QuestionOption)
                .WithMany(option => option.QuestionOptionTitles)
                .HasForeignKey(title => title.QuestionOptionId);

            builder
                .Entity<QuestionOptionTitle>()
                .HasOne(title => title.Language)
                .WithMany(language => language.QuestionOptionTitles)
                .HasForeignKey(title => title.LanguageId);
        }

        internal static void ConfigureQuestionOptionImageBinaryRelations(this ModelBuilder builder)
        {
            builder
                .Entity<QuestionOption>()
                .HasOne(option => option.OptionImageBinary)
                .WithMany(imageBinary => imageBinary.QuestionOptions)
                .HasForeignKey(option => option.OptionImageBinaryId)
                .IsRequired(false);
        }

        internal static void ConfigureTestResultQuestionOptionRelations(this ModelBuilder builder)
        {
            builder
                .Entity<ResultOptionMap>()
                .HasOne(map => map.TestResult)
                .WithMany(result => result.ResultOptionMaps)
                .HasForeignKey(option => option.TestResultId);

            builder
                .Entity<ResultOptionMap>()
                .HasOne(map => map.QuestionOption)
                .WithMany(option => option.ResultOptionMaps)
                .HasForeignKey(map => map.QuestionOptionId);
        }
    }
}