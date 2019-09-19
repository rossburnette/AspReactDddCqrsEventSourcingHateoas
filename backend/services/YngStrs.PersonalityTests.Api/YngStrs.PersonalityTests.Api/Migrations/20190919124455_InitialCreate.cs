using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace YngStrs.PersonalityTests.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "languages",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    english_name = table.Column<string>(nullable: true),
                    native_name = table.Column<string>(nullable: true),
                    enum_value = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_languages", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "option_image_binaries",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    image_data = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_option_image_binaries", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "personality_tests",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    is_shared = table.Column<bool>(nullable: false),
                    customer_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_personality_tests", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "test_questions",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    serial_number = table.Column<int>(nullable: false),
                    personality_test_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_test_questions", x => x.id);
                    table.ForeignKey(
                        name: "FK_test_questions_personality_tests_personality_test_id",
                        column: x => x.personality_test_id,
                        principalTable: "personality_tests",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "test_results",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    personality_test_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_test_results", x => x.id);
                    table.ForeignKey(
                        name: "FK_test_results_personality_tests_personality_test_id",
                        column: x => x.personality_test_id,
                        principalTable: "personality_tests",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "question_options",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    is_text_only = table.Column<bool>(nullable: false),
                    test_question_id = table.Column<Guid>(nullable: false),
                    option_image_binary_id = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_question_options", x => x.id);
                    table.ForeignKey(
                        name: "FK_question_options_option_image_binaries_option_image_binary_~",
                        column: x => x.option_image_binary_id,
                        principalTable: "option_image_binaries",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_question_options_test_questions_test_question_id",
                        column: x => x.test_question_id,
                        principalTable: "test_questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "test_question_titles",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    language_id = table.Column<Guid>(nullable: false),
                    test_question_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_test_question_titles", x => x.id);
                    table.ForeignKey(
                        name: "FK_test_question_titles_languages_language_id",
                        column: x => x.language_id,
                        principalTable: "languages",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_test_question_titles_test_questions_test_question_id",
                        column: x => x.test_question_id,
                        principalTable: "test_questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "test_result_titles",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    language_id = table.Column<Guid>(nullable: false),
                    test_result_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_test_result_titles", x => x.id);
                    table.ForeignKey(
                        name: "FK_test_result_titles_languages_language_id",
                        column: x => x.language_id,
                        principalTable: "languages",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_test_result_titles_test_results_test_result_id",
                        column: x => x.test_result_id,
                        principalTable: "test_results",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "question_option_titles",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    created_on = table.Column<DateTimeOffset>(nullable: false),
                    modified_on = table.Column<DateTimeOffset>(nullable: true),
                    is_deleted = table.Column<bool>(nullable: false),
                    deleted_on = table.Column<DateTimeOffset>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    language_id = table.Column<Guid>(nullable: false),
                    question_option_id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_question_option_titles", x => x.id);
                    table.ForeignKey(
                        name: "FK_question_option_titles_languages_language_id",
                        column: x => x.language_id,
                        principalTable: "languages",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_question_option_titles_question_options_question_option_id",
                        column: x => x.question_option_id,
                        principalTable: "question_options",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_question_option_titles_language_id",
                table: "question_option_titles",
                column: "language_id");

            migrationBuilder.CreateIndex(
                name: "IX_question_option_titles_question_option_id",
                table: "question_option_titles",
                column: "question_option_id");

            migrationBuilder.CreateIndex(
                name: "IX_question_options_option_image_binary_id",
                table: "question_options",
                column: "option_image_binary_id");

            migrationBuilder.CreateIndex(
                name: "IX_question_options_test_question_id",
                table: "question_options",
                column: "test_question_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_question_titles_language_id",
                table: "test_question_titles",
                column: "language_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_question_titles_test_question_id",
                table: "test_question_titles",
                column: "test_question_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_questions_personality_test_id",
                table: "test_questions",
                column: "personality_test_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_result_titles_language_id",
                table: "test_result_titles",
                column: "language_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_result_titles_test_result_id",
                table: "test_result_titles",
                column: "test_result_id");

            migrationBuilder.CreateIndex(
                name: "IX_test_results_personality_test_id",
                table: "test_results",
                column: "personality_test_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "question_option_titles");

            migrationBuilder.DropTable(
                name: "test_question_titles");

            migrationBuilder.DropTable(
                name: "test_result_titles");

            migrationBuilder.DropTable(
                name: "question_options");

            migrationBuilder.DropTable(
                name: "languages");

            migrationBuilder.DropTable(
                name: "test_results");

            migrationBuilder.DropTable(
                name: "option_image_binaries");

            migrationBuilder.DropTable(
                name: "test_questions");

            migrationBuilder.DropTable(
                name: "personality_tests");
        }
    }
}
