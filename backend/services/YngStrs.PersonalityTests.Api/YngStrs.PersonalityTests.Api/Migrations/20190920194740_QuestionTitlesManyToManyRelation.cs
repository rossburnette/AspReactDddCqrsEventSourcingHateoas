using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace YngStrs.PersonalityTests.Api.Migrations
{
    public partial class QuestionTitlesManyToManyRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_test_question_titles_languages_language_id",
                table: "test_question_titles");

            migrationBuilder.DropColumn(
                name: "description",
                table: "test_question_titles");

            migrationBuilder.RenameColumn(
                name: "language_id",
                table: "test_question_titles",
                newName: "common_question_title_id");

            migrationBuilder.RenameIndex(
                name: "IX_test_question_titles_language_id",
                table: "test_question_titles",
                newName: "IX_test_question_titles_common_question_title_id");

            migrationBuilder.CreateTable(
                name: "CommonQuestionTitles",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    language_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommonQuestionTitles", x => x.id);
                    table.ForeignKey(
                        name: "FK_CommonQuestionTitles_languages_language_id",
                        column: x => x.language_id,
                        principalTable: "languages",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CommonQuestionTitles_language_id",
                table: "CommonQuestionTitles",
                column: "language_id");

            migrationBuilder.AddForeignKey(
                name: "FK_test_question_titles_CommonQuestionTitles_common_question_t~",
                table: "test_question_titles",
                column: "common_question_title_id",
                principalTable: "CommonQuestionTitles",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_test_question_titles_CommonQuestionTitles_common_question_t~",
                table: "test_question_titles");

            migrationBuilder.DropTable(
                name: "CommonQuestionTitles");

            migrationBuilder.RenameColumn(
                name: "common_question_title_id",
                table: "test_question_titles",
                newName: "language_id");

            migrationBuilder.RenameIndex(
                name: "IX_test_question_titles_common_question_title_id",
                table: "test_question_titles",
                newName: "IX_test_question_titles_language_id");

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "test_question_titles",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_test_question_titles_languages_language_id",
                table: "test_question_titles",
                column: "language_id",
                principalTable: "languages",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
