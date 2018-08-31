using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class DevSItes_Decorate_Required_columns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AlterColumn<string>(
                name: "SolutionName",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SiteTitle",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID",
                principalSchema: "DemoSites",
                principalTable: "SoftwareCode",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AlterColumn<string>(
                name: "SolutionName",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<int>(
                name: "SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "SiteTitle",
                schema: "DemoSites",
                table: "DevSites",
                nullable: true,
                oldClrType: typeof(string));

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
    }
}
