using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Fixdefaultvalueforjobsjob_statusidsetto1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

update [DemoSites].[Jobs] set Job_StatusID = 1 where Job_StatusID = 0 

");


            // 09/16/2019 02:56 pm - SSN - [20190916-1123] - [009] - Adding job status
            // Moved to Fixdefaultvalueforjobsjob_statusidsetto1 [20190916-1123] - [009]
            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Job_Statuses_Job_StatusID",
                schema: "DemoSites",
                table: "Jobs",
                column: "Job_StatusID",
                principalSchema: "DemoSites",
                principalTable: "Job_Statuses",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                        name: "FK_Jobs_Job_Statuses_Job_StatusID",
                        schema: "DemoSites",
                        table: "Jobs");
        }
    }
}
