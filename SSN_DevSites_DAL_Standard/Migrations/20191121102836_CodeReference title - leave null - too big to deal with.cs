using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class CodeReferencetitleleavenulltoobigtodealwith : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // 11/21/2019 04:29 am - SSN - Tabe too big to deal with this 

            //    migrationBuilder.AlterColumn<string>(
            //        name: "Title",
            //        schema: "DemoSites",
            //        table: "CodeReferences",
            //        maxLength: 100,
            //        nullable: true,
            //        oldClrType: typeof(string),
            //        oldMaxLength: 100);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.AlterColumn<string>(
            //    name: "Title",
            //    schema: "DemoSites",
            //    table: "CodeReferences",
            //    maxLength: 100,
            //    nullable: false,
            //    oldClrType: typeof(string),
            //    oldMaxLength: 100,
            //    oldNullable: true);
        }
    }
}
