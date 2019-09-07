using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddtableJob_DevSitesandpluralizetablenameexceptfortimelog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.DropForeignKey(
                name: "FK_Project_Companies_CompanyID",
                schema: "DemoSites",
                table: "Project");

            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Discipline_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Job_JobId",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SoftwareCode",
                schema: "DemoSites",
                table: "SoftwareCode");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Project",
                schema: "DemoSites",
                table: "Project");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Job",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Discipline",
                schema: "DemoSites",
                table: "Discipline");

            migrationBuilder.RenameTable(
                name: "SoftwareCode",
                schema: "DemoSites",
                newName: "SoftwareCodes",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Project",
                schema: "DemoSites",
                newName: "Projects",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Job",
                schema: "DemoSites",
                newName: "Jobs",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Discipline",
                schema: "DemoSites",
                newName: "Disciplines",
                newSchema: "DemoSites");

            migrationBuilder.RenameIndex(
                name: "IX_Project_CompanyID",
                schema: "DemoSites",
                table: "Projects",
                newName: "IX_Projects_CompanyID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SoftwareCodes",
                schema: "DemoSites",
                table: "SoftwareCodes",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Projects",
                schema: "DemoSites",
                table: "Projects",
                column: "ProjectID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Jobs",
                schema: "DemoSites",
                table: "Jobs",
                column: "JobID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Disciplines",
                schema: "DemoSites",
                table: "Disciplines",
                column: "DisciplineId");

            migrationBuilder.CreateTable(
                name: "Job_DevSites",
                schema: "DemoSites",
                columns: table => new
                {
                    Job_DevSiteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    JobId = table.Column<int>(nullable: false),
                    DevSiteId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job_DevSites", x => x.Job_DevSiteId);
                    table.ForeignKey(
                        name: "FK_Job_DevSites_DevSites_DevSiteId",
                        column: x => x.DevSiteId,
                        principalSchema: "DemoSites",
                        principalTable: "DevSites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Job_DevSites_Jobs_JobId",
                        column: x => x.JobId,
                        principalSchema: "DemoSites",
                        principalTable: "Jobs",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Job_DevSites_DevSiteId",
                schema: "DemoSites",
                table: "Job_DevSites",
                column: "DevSiteId");

            migrationBuilder.CreateIndex(
                name: "IX_Job_DevSites_JobId",
                schema: "DemoSites",
                table: "Job_DevSites",
                column: "JobId");

            migrationBuilder.AddForeignKey(
                name: "FK_DevSites_SoftwareCodes_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID",
                principalSchema: "DemoSites",
                principalTable: "SoftwareCodes",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Projects_ProjectID",
                schema: "DemoSites",
                table: "Jobs",
                column: "ProjectID",
                principalSchema: "DemoSites",
                principalTable: "Projects",
                principalColumn: "ProjectID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Companies_CompanyID",
                schema: "DemoSites",
                table: "Projects",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Companies",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Disciplines_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog",
                column: "DisciplineID",
                principalSchema: "DemoSites",
                principalTable: "Disciplines",
                principalColumn: "DisciplineId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Jobs_JobId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "JobId",
                principalSchema: "DemoSites",
                principalTable: "Jobs",
                principalColumn: "JobID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCodes_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Projects_ProjectID",
                schema: "DemoSites",
                table: "Jobs");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Companies_CompanyID",
                schema: "DemoSites",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Disciplines_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Jobs_JobId",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropTable(
                name: "Job_DevSites",
                schema: "DemoSites");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SoftwareCodes",
                schema: "DemoSites",
                table: "SoftwareCodes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Projects",
                schema: "DemoSites",
                table: "Projects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Jobs",
                schema: "DemoSites",
                table: "Jobs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Disciplines",
                schema: "DemoSites",
                table: "Disciplines");

            migrationBuilder.RenameTable(
                name: "SoftwareCodes",
                schema: "DemoSites",
                newName: "SoftwareCode",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Projects",
                schema: "DemoSites",
                newName: "Project",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Jobs",
                schema: "DemoSites",
                newName: "Job",
                newSchema: "DemoSites");

            migrationBuilder.RenameTable(
                name: "Disciplines",
                schema: "DemoSites",
                newName: "Discipline",
                newSchema: "DemoSites");

            migrationBuilder.RenameIndex(
                name: "IX_Projects_CompanyID",
                schema: "DemoSites",
                table: "Project",
                newName: "IX_Project_CompanyID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SoftwareCode",
                schema: "DemoSites",
                table: "SoftwareCode",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Project",
                schema: "DemoSites",
                table: "Project",
                column: "ProjectID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Job",
                schema: "DemoSites",
                table: "Job",
                column: "JobID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Discipline",
                schema: "DemoSites",
                table: "Discipline",
                column: "DisciplineId");

            migrationBuilder.AddForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID",
                principalSchema: "DemoSites",
                principalTable: "SoftwareCode",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job",
                column: "ProjectID",
                principalSchema: "DemoSites",
                principalTable: "Project",
                principalColumn: "ProjectID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Project_Companies_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Companies",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Discipline_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog",
                column: "DisciplineID",
                principalSchema: "DemoSites",
                principalTable: "Discipline",
                principalColumn: "DisciplineId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Job_JobId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "JobId",
                principalSchema: "DemoSites",
                principalTable: "Job",
                principalColumn: "JobID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
