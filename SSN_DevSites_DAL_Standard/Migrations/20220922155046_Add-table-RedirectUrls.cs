using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddtableRedirectUrls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RedirectUrls",
                schema: "DemoSites",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    Url = table.Column<string>(nullable: false),
                    UrlText = table.Column<string>(nullable: true),
                    UrlDetail = table.Column<string>(nullable: true),
                    DateDisabled = table.Column<DateTime>(nullable: true),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    DateUpdated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RedirectUrls", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RedirectUrls",
                schema: "DemoSites");
        }
    }
}
