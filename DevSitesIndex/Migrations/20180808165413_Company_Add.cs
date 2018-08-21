using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Company_Add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "DemoSites");

            migrationBuilder.CreateTable(
                name: "DevSites",
                schema: "DemoSites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SiteTitle = table.Column<string>(nullable: true),
                    SiteUrl = table.Column<string>(nullable: true),
                    SoftwareCode = table.Column<int>(nullable: false),
                    SolutionName = table.Column<string>(nullable: true),
                    Solution_Details = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DevSites", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DevSites",
                schema: "DemoSites");
        }
    }
}
