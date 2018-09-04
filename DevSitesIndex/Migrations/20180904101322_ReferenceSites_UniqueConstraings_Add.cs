using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class ReferenceSites_UniqueConstraings_Add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddUniqueConstraint(
                name: "ReferenceSites_SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites",
                column: "SiteTitle");

            migrationBuilder.AddUniqueConstraint(
                name: "ReferenceSites_SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites",
                column: "SiteURL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "ReferenceSites_SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites");

            migrationBuilder.DropUniqueConstraint(
                name: "ReferenceSites_SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites");

            migrationBuilder.AlterColumn<string>(
                name: "SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
