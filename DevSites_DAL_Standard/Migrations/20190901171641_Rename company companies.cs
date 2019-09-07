using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Renamecompanycompanies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Project_Company_CompanyID",
                schema: "DemoSites",
                table: "Project");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Company",
                schema: "DemoSites",
                table: "Company");

            migrationBuilder.RenameTable(
                name: "Company",
                schema: "DemoSites",
                newName: "Companies",
                newSchema: "DemoSites");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Companies",
                schema: "DemoSites",
                table: "Companies",
                column: "CompanyID");

            migrationBuilder.AddForeignKey(
                name: "FK_Project_Companies_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Companies",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Project_Companies_CompanyID",
                schema: "DemoSites",
                table: "Project");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Companies",
                schema: "DemoSites",
                table: "Companies");

            migrationBuilder.RenameTable(
                name: "Companies",
                schema: "DemoSites",
                newName: "Company",
                newSchema: "DemoSites");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Company",
                schema: "DemoSites",
                table: "Company",
                column: "CompanyID");

            migrationBuilder.AddForeignKey(
                name: "FK_Project_Company_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Company",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
