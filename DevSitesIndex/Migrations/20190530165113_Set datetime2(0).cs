using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Setdatetime20 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            dropIndex(migrationBuilder);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "TimeLog",
                type: "datetime2(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "TimeLog",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "ReferenceSites",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "Discipline",
                type: "datetime2(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "Discipline",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "Company",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "CodeReferences",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "CodeReferences",
                type: "datetime2(0)",
                nullable: false,
                oldClrType: typeof(DateTime));

            createIndex(migrationBuilder);

        }

        private static void dropIndex(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
DROP INDEX [NonClusteredIndex-DateAdded-DateModified] ON [DemoSites].[CodeReferences]
GO

");
        }

        private static void createIndex(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
CREATE NONCLUSTERED INDEX [NonClusteredIndex-DateAdded-DateModified] ON [DemoSites].[CodeReferences]
(
	[DateModified] ASC,
	[DateAdded] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            dropIndex(migrationBuilder);


            migrationBuilder.AlterColumn<DateTime>(

                name: "DateModified",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "ReferenceSites",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "Discipline",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "Discipline",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "Company",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateModified",
                schema: "DemoSites",
                table: "CodeReferences",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateAdded",
                schema: "DemoSites",
                table: "CodeReferences",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2(0)");


            createIndex(migrationBuilder);

        }
    }
}
