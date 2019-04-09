using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class TimelognullifyTotalSeconds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TotalSeconds",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TotalSeconds",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
