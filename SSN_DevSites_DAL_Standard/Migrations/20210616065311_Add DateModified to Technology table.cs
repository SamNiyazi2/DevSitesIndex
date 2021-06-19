using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddDateModifiedtoTechnologytable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "Technologies",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateModified",
                schema: "DemoSites",
                table: "Technologies");
        }
    }
}
