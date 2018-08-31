using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class DevSItes_Decorate_Required_columns_TakeoutTestCol : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TestCol1",
                schema: "DemoSites",
                table: "DevSites");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TestCol1",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true);
        }
    }
}
