using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class DevSiteCodeReferenceCreated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DevSiteCodeReference",
                schema: "DemoSites",
                columns: table => new
                {
                    DevSiteId = table.Column<int>(nullable: false),
                    CodeReferenceId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DevSiteCodeReference", x => new { x.DevSiteId, x.CodeReferenceId });
                    table.ForeignKey(
                        name: "FK_DevSiteCodeReference_CodeReferences_CodeReferenceId",
                        column: x => x.CodeReferenceId,
                        principalSchema: "DemoSites",
                        principalTable: "CodeReferences",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DevSiteCodeReference_DevSites_DevSiteId",
                        column: x => x.DevSiteId,
                        principalSchema: "DemoSites",
                        principalTable: "DevSites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DevSiteCodeReference_CodeReferenceId",
                schema: "DemoSites",
                table: "DevSiteCodeReference",
                column: "CodeReferenceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DevSiteCodeReference",
                schema: "DemoSites");
        }
    }
}
