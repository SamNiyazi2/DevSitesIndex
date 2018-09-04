using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class ReferenceSite_ReviseUniqueIndex : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "ReferenceSites_SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites");

            migrationBuilder.DropUniqueConstraint(
                name: "ReferenceSites_SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites");

            migrationBuilder.CreateIndex(
                name: "ReferenceSites_SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites",
                column: "SiteTitle",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ReferenceSites_SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites",
                column: "SiteURL",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "ReferenceSites_SiteTitle",
                schema: "DemoSites",
                table: "ReferenceSites");

            migrationBuilder.DropIndex(
                name: "ReferenceSites_SiteURL",
                schema: "DemoSites",
                table: "ReferenceSites");

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
    }
}
