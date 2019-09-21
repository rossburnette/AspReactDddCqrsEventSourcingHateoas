using Microsoft.EntityFrameworkCore.Migrations;

namespace YngStrs.PersonalityTests.Api.Migrations
{
    public partial class OptionImageBinaryUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "option_image_binaries",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "option_image_binaries",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "option_image_binaries");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "option_image_binaries");
        }
    }
}
