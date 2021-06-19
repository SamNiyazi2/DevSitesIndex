using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

//namespace DevSitesIndex.Migrations
//{
    //public partial class DevSiteTechnologiesv02 : Migration
    //{
        //protected override void Up(MigrationBuilder migrationBuilder)
        //{
        //    migrationBuilder.CreateTable(
        //        name: "DevSiteTechnologies",
        //        schema: "DemoSites",
        //        columns: table => new
        //        {
        //            Id = table.Column<int>(nullable: false)
        //                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
        //            DevSiteId = table.Column<int>(nullable: false),
        //            TechnologyId = table.Column<int>(nullable: false)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_DevSiteTechnologies", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_DevSiteTechnologies_DevSites_DevSiteId",
        //                column: x => x.DevSiteId,
        //                principalSchema: "DemoSites",
        //                principalTable: "DevSites",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Restrict);
        //            table.ForeignKey(
        //                name: "FK_DevSiteTechnologies_Technologies_TechnologyId",
        //                column: x => x.TechnologyId,
        //                principalSchema: "DemoSites",
        //                principalTable: "Technologies",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Restrict);
        //        });

        //    migrationBuilder.CreateIndex(
        //        name: "IX_DevSiteTechnologies_DevSiteId",
        //        schema: "DemoSites",
        //        table: "DevSiteTechnologies",
        //        column: "DevSiteId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_DevSiteTechnologies_TechnologyId",
        //        schema: "DemoSites",
        //        table: "DevSiteTechnologies",
        //        column: "TechnologyId");
        //}

        //protected override void Down(MigrationBuilder migrationBuilder)
        //{
        //    migrationBuilder.DropTable(
        //        name: "DevSiteTechnologies",
        //        schema: "DemoSites");
        //}
//    }
//}
