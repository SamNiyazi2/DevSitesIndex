using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Companynameunique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // 09/13/2019  11:55 pm - SSN - 
            // Column is decorated [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
            //migrationBuilder.AddColumn<DateTime>(
            //    name: "LastActivityDate",
            //    schema: "DemoSites",
            //    table: "DevSites",
            //    nullable: false,
            //    defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "Job_CompanyName_Unique",
                schema: "DemoSites",
                table: "Companies",
                column: "CompanyName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "Job_CompanyName_Unique",
                schema: "DemoSites",
                table: "Companies");

            //migrationBuilder.DropColumn(
            //    name: "LastActivityDate",
            //    schema: "DemoSites",
            //    table: "DevSites");
        }
    }
}
