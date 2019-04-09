using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Jobprojectandtitleunique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Job_ProjectID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.AlterColumn<string>(
                name: "JobTitle",
                schema: "DemoSites",
                table: "Job",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "Job_ProjectID_Title_Unique",
                schema: "DemoSites",
                table: "Job",
                columns: new[] { "ProjectID", "JobTitle" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "Job_ProjectID_Title_Unique",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.AlterColumn<string>(
                name: "JobTitle",
                schema: "DemoSites",
                table: "Job",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100);

            migrationBuilder.CreateIndex(
                name: "IX_Job_ProjectID",
                schema: "DemoSites",
                table: "Job",
                column: "ProjectID");
        }
    }
}
