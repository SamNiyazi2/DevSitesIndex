using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class ProjectDate_modifiedremoveResetmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropColumn(
            //    name: "DateModified",
            //    schema: "DemoSites",
            //    table: "Project");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.AddColumn<DateTime>(
            //    name: "DateModified",
            //    schema: "DemoSites",
            //    table: "Project",
            //    nullable: true);
        }
    }
}
