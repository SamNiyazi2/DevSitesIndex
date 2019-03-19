using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class ReviseDevSiteCanBeLaunchedasnotnullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("update demosites.devsites set CanBeLaunched = 0");

            migrationBuilder.AlterColumn<bool>(
                name: "CanBeLaunched",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "CanBeLaunched",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true,
                oldClrType: typeof(bool));
        }
    }
}
