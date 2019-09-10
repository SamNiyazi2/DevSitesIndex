using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class DisableGlobalCascadeDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSiteCodeReference_CodeReferences_CodeReferenceId",
                schema: "DemoSites",
                table: "DevSiteCodeReference");

            migrationBuilder.DropForeignKey(
                name: "FK_DevSiteCodeReference_DevSites_DevSiteId",
                schema: "DemoSites",
                table: "DevSiteCodeReference");

            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.DropForeignKey(
                name: "FK_Project_Company_CompanyID",
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

            migrationBuilder.AddForeignKey(
                name: "FK_DevSiteCodeReference_CodeReferences_CodeReferenceId",
                schema: "DemoSites",
                table: "DevSiteCodeReference",
                column: "CodeReferenceId",
                principalSchema: "DemoSites",
                principalTable: "CodeReferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DevSiteCodeReference_DevSites_DevSiteId",
                schema: "DemoSites",
                table: "DevSiteCodeReference",
                column: "DevSiteId",
                principalSchema: "DemoSites",
                principalTable: "DevSites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

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
                name: "FK_Project_Company_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Company",
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DevSiteCodeReference_CodeReferences_CodeReferenceId",
                schema: "DemoSites",
                table: "DevSiteCodeReference");

            migrationBuilder.DropForeignKey(
                name: "FK_DevSiteCodeReference_DevSites_DevSiteId",
                schema: "DemoSites",
                table: "DevSiteCodeReference");

            migrationBuilder.DropForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.DropForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job");

            migrationBuilder.DropForeignKey(
                name: "FK_Project_Company_CompanyID",
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

            migrationBuilder.AddForeignKey(
                name: "FK_DevSiteCodeReference_CodeReferences_CodeReferenceId",
                schema: "DemoSites",
                table: "DevSiteCodeReference",
                column: "CodeReferenceId",
                principalSchema: "DemoSites",
                principalTable: "CodeReferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DevSiteCodeReference_DevSites_DevSiteId",
                schema: "DemoSites",
                table: "DevSiteCodeReference",
                column: "DevSiteId",
                principalSchema: "DemoSites",
                principalTable: "DevSites",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
                schema: "DemoSites",
                table: "DevSites",
                column: "SoftwareCodeID",
                principalSchema: "DemoSites",
                principalTable: "SoftwareCode",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Project_ProjectID",
                schema: "DemoSites",
                table: "Job",
                column: "ProjectID",
                principalSchema: "DemoSites",
                principalTable: "Project",
                principalColumn: "ProjectID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Project_Company_CompanyID",
                schema: "DemoSites",
                table: "Project",
                column: "CompanyID",
                principalSchema: "DemoSites",
                principalTable: "Company",
                principalColumn: "CompanyID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Discipline_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog",
                column: "DisciplineID",
                principalSchema: "DemoSites",
                principalTable: "Discipline",
                principalColumn: "DisciplineId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Job_JobId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "JobId",
                principalSchema: "DemoSites",
                principalTable: "Job",
                principalColumn: "JobID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
