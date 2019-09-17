using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddJob_Statusestable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Projects_CompanyID",
                schema: "DemoSites",
                table: "Projects");

            migrationBuilder.AddColumn<int>(
                name: "Job_StatusID",
                schema: "DemoSites",
                table: "Jobs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Job_Statuses",
                schema: "DemoSites",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Status = table.Column<string>(maxLength: 100, nullable: false),
                    DateAdded = table.Column<DateTime>(type: "datetime2(0)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job_Statuses", x => x.ID);
                });

          



            // 09/16/2019 12:42 pm - SSN - [20190916-1123] - [005] - Adding job status

            migrationBuilder.Sql(@"
-- 237
set identity_insert demosites.job_statuses on

declare @d datetime

set @d = '2019-09-16'

insert into demosites.job_statuses 
( id, status , dateadded ) values 
	( 1, 'Open' , @d )
	, (2, 'Pending', @d )
	, (3,'Completed', @d )
	, (4,'Cancelled', @d )

set identity_insert demosites.job_statuses off

");

            migrationBuilder.CreateIndex(
                name: "Project_CompanyID_ProjectTitle_IsUnique",
                schema: "DemoSites",
                table: "Projects",
                columns: new[] { "CompanyID", "ProjectTitle" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_Job_StatusID",
                schema: "DemoSites",
                table: "Jobs",
                column: "Job_StatusID");

            migrationBuilder.CreateIndex(
                name: "Job_Status_Unique",
                schema: "DemoSites",
                table: "Job_Statuses",
                column: "Status",
                unique: true);



            // 09/16/2019 02:45 pm - SSN - [20190916-1123] - [008] - Adding job status

            migrationBuilder.AlterColumn<int>(
               name: "Job_StatusID",
               schema: "DemoSites",
               table: "Jobs",
               nullable: false,
               defaultValueSql: "1",
               oldClrType: typeof(int));


            // 09/16/2019 02:56 pm - SSN - [20190916-1123] - [009] - Adding job status
            // Moved to Fixdefaultvalueforjobsjob_statusidsetto1 [20190916-1123] - [009]
            ////////////////////////migrationBuilder.AddForeignKey(
            ////////////////////////    name: "FK_Jobs_Job_Statuses_Job_StatusID",
            ////////////////////////    schema: "DemoSites",
            ////////////////////////    table: "Jobs",
            ////////////////////////    column: "Job_StatusID",
            ////////////////////////    principalSchema: "DemoSites",
            ////////////////////////    principalTable: "Job_Statuses",
            ////////////////////////    principalColumn: "ID",
            ////////////////////////    onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Job_Statuses_Job_StatusID",
                schema: "DemoSites",
                table: "Jobs");

            migrationBuilder.DropTable(
                name: "Job_Statuses",
                schema: "DemoSites");

            migrationBuilder.DropIndex(
                name: "Project_CompanyID_ProjectTitle_IsUnique",
                schema: "DemoSites",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_Job_StatusID",
                schema: "DemoSites",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "Job_StatusID",
                schema: "DemoSites",
                table: "Jobs");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_CompanyID",
                schema: "DemoSites",
                table: "Projects",
                column: "CompanyID");
        }
    }
}
