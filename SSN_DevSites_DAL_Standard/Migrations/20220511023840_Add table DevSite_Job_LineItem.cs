using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddtableDevSite_Job_LineItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddUniqueConstraint(
                name: "AK_AspNetUsers_PK_UserID",
                schema: "dbo",
                table: "AspNetUsers",
                column: "PK_UserID");

            migrationBuilder.CreateTable(
                name: "DevSite_Job_LineItems",
                schema: "DemoSites",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DevSiteId = table.Column<int>(nullable: false),
                    Job_LineItemId = table.Column<int>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    FK_UserID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DevSite_Job_LineItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DevSite_Job_LineItems_DevSites_DevSiteId",
                        column: x => x.DevSiteId,
                        principalSchema: "DemoSites",
                        principalTable: "DevSites",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DevSite_Job_LineItems_AspNetUsers_FK_UserID",
                        column: x => x.FK_UserID,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "PK_UserID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DevSite_Job_LineItems_Job_Lineitems_Job_LineItemId",
                        column: x => x.Job_LineItemId,
                        principalSchema: "DemoSites",
                        principalTable: "Job_Lineitems",
                        principalColumn: "LineItemId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DevSite_Job_LineItems_FK_UserID",
                schema: "DemoSites",
                table: "DevSite_Job_LineItems",
                column: "FK_UserID");

            migrationBuilder.CreateIndex(
                name: "IX_DevSite_Job_LineItems_Job_LineItemId",
                schema: "DemoSites",
                table: "DevSite_Job_LineItems",
                column: "Job_LineItemId");

            migrationBuilder.CreateIndex(
                name: "IK_DevSite_Job_LineItem_Unique",
                schema: "DemoSites",
                table: "DevSite_Job_LineItems",
                columns: new[] { "DevSiteId", "Job_LineItemId" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DevSite_Job_LineItems",
                schema: "DemoSites");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_AspNetUsers_PK_UserID",
                schema: "dbo",
                table: "AspNetUsers");
        }
    }
}
