using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class ReferenceSiteaddDateUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateUpdated",
                schema: "DemoSites",
                table: "ReferenceSites");
        }
    }
}
