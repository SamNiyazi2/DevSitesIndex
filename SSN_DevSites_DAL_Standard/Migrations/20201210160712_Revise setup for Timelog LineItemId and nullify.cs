using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class RevisesetupforTimelogLineItemIdandnullify : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Job_Lineitems_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.RenameColumn(
                name: "Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog",
                newName: "LineItemID");

            migrationBuilder.RenameIndex(
                name: "IX_TimeLog_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog",
                newName: "IX_TimeLog_LineItemID");

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Job_Lineitems_LineItemID",
                schema: "DemoSites",
                table: "TimeLog",
                column: "LineItemID",
                principalSchema: "DemoSites",
                principalTable: "Job_Lineitems",
                principalColumn: "LineItemId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Job_Lineitems_LineItemID",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.RenameColumn(
                name: "LineItemID",
                schema: "DemoSites",
                table: "TimeLog",
                newName: "Job_LineitemLineItemId");

            migrationBuilder.RenameIndex(
                name: "IX_TimeLog_LineItemID",
                schema: "DemoSites",
                table: "TimeLog",
                newName: "IX_TimeLog_Job_LineitemLineItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_TimeLog_Job_Lineitems_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "Job_LineitemLineItemId",
                principalSchema: "DemoSites",
                principalTable: "Job_Lineitems",
                principalColumn: "LineItemId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
