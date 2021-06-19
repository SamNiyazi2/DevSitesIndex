using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddDateAddedtoDevSiteTechnologIestable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "DevSiteTechnologies",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateAdded",
                schema: "DemoSites",
                table: "DevSiteTechnologies");
        }
    }
}
