using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class JobtableaddTest_0224aTestAzureSQLmigrationRemovecolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Test_0224a",
                schema: "DemoSites",
                table: "Job");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Test_0224a",
                schema: "DemoSites",
                table: "Job",
                nullable: true);
        }
    }
}
