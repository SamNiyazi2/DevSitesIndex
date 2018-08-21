using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Project_CorrectProjectTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ProjectTitle",
                schema: "DemoSites",
                table: "Project",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ProjectTitle",
                schema: "DemoSites",
                table: "Project",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
