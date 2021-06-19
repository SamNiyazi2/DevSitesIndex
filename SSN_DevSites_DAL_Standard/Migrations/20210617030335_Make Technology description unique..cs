using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class MakeTechnologydescriptionunique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "Technology_Description_Unique_2153",
                schema: "DemoSites",
                table: "Technologies",
                column: "Description",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "Technology_Description_Unique_2153",
                schema: "DemoSites",
                table: "Technologies");
        }
    }
}
