using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            // 09/16/2019 02:45 pm - SSN - [20190916-1123] - [008] - Adding job status
            // Moved code to 20190916164753_Add Job_Statuses table  [20190916-1123] - [008]
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.AlterColumn<int>(
            //    name: "Job_StatusID",
            //    schema: "DemoSites",
            //    table: "Jobs",
            //    nullable: false,
            //    oldClrType: typeof(int),
            //    oldDefaultValueSql: "1");
        }
    }
}
