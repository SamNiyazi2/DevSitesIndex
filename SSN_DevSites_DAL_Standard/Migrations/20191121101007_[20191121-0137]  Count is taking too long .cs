using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class _201911210137Countistakingtoolong : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //  11/21/2019 04:12 am - [20191121-0137] Count is taking too long
            //

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.AlterColumn<string>(
            //    name: "Title",
            //    schema: "DemoSites",
            //    table: "CodeReferences",
            //    maxLength: 100,
            //    nullable: true,
            //    oldClrType: typeof(string),
            //    oldMaxLength: 100);
        }
    }
}
