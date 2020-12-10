using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddingJob_Lineitemstable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Job_Lineitems",
                schema: "DemoSites",
                columns: table => new
                {
                    LineItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    JobId = table.Column<int>(nullable: false),
                    LineItem = table.Column<string>(maxLength: 200, nullable: false),
                    DateAdded = table.Column<DateTime>(type: "datetime2(0)", nullable: false),
                    DateModified = table.Column<DateTime>(type: "datetime2(0)", nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job_Lineitems", x => x.LineItemId);
                    table.ForeignKey(
                        name: "FK_Job_Lineitems_Jobs_JobId",
                        column: x => x.JobId,
                        principalSchema: "DemoSites",
                        principalTable: "Jobs",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TimeLog_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "Job_LineitemLineItemId");

            migrationBuilder.CreateIndex(
                name: "Job_Lineitem_JobId_LineItem_Unique",
                schema: "DemoSites",
                table: "Job_Lineitems",
                columns: new[] { "JobId", "LineItem" },
                unique: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimeLog_Job_Lineitems_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropTable(
                name: "Job_Lineitems",
                schema: "DemoSites");

            migrationBuilder.DropIndex(
                name: "IX_TimeLog_Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropColumn(
                name: "Job_LineitemLineItemId",
                schema: "DemoSites",
                table: "TimeLog");
        }
    }
}
