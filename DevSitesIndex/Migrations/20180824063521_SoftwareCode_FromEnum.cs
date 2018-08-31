using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class SoftwareCode_FromEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoftwareCode",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AddColumn<int>(
                name: "SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SoftwareCode",
                schema: "DemoSites",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SoftwareTitle = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftwareCode", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DevSites_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID");

            migrationBuilder.AddForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID",
                principalSchema: "DemoSites",
                principalTable: "SoftwareCode",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropTable(
                name: "SoftwareCode",
                schema: "DemoSites");

            migrationBuilder.DropIndex(
                name: "IX_DevSites_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropColumn(
                name: "SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AddColumn<int>(
                name: "SoftwareCode",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                defaultValue: 0);
        }
    }
}
