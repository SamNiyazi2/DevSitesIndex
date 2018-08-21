using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Project_Add_Job_Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Company_CompanyID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.RenameColumn(
                name: "CompanyID",
                schema: "DemoSites",
                table: "Job",
                newName: "ProjectID");

            migrationBuilder.RenameIndex(
                name: "IX_Job_CompanyID",
                schema: "DemoSites",
                table: "Job",
                newName: "IX_Job_ProjectID");

            migrationBuilder.CreateTable(
                name: "Project",
                schema: "DemoSites",
                columns: table => new
                {
                    ProjectID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CompanyID = table.Column<int>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    ProjectTitle = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.ProjectID);
                    table.ForeignKey(
                        name: "FK_Project_Company_CompanyID",
                        column: x => x.CompanyID,
                        principalSchema: "DemoSites",
                        principalTable: "Company",
                        principalColumn: "CompanyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Project_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID");

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job",
                column: "ProjectID",
                principalSchema: "DemoSites",
                principalTable: "Project",
                principalColumn: "ProjectID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.DropTable(
                name: "Project",
                schema: "DemoSites");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                schema: "DemoSites",
                table: "Job",
                newName: "CompanyID");

            migrationBuilder.RenameIndex(
                name: "IX_Job_ProjectID",
                schema: "DemoSites",
                table: "Job",
                newName: "IX_Job_CompanyID");

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Company_CompanyID",
                schema: "DemoSites",
                table: "Job",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Company",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
