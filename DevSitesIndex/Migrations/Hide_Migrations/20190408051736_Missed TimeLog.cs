using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class MissedTimeLog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TimeLog",
                schema: "DemoSites",
                columns: table => new
                {
                    TimeLogId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DisciplineID = table.Column<int>(nullable: false),
                    JobId = table.Column<int>(nullable: false),
                    StartTime = table.Column<DateTime>(nullable: false),
                    TotalSeconds = table.Column<int>(nullable: false),
                    WorkDetail = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeLog", x => x.TimeLogId);
                    table.ForeignKey(
                        name: "FK_TimeLog_Discipline_DisciplineID",
                        column: x => x.DisciplineID,
                        principalSchema: "DemoSites",
                        principalTable: "Discipline",
                        principalColumn: "DisciplineId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TimeLog_Job_JobId",
                        column: x => x.JobId,
                        principalSchema: "DemoSites",
                        principalTable: "Job",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TimeLog_DisciplineID",
                schema: "DemoSites",
                table: "TimeLog",
                column: "DisciplineID");

            migrationBuilder.CreateIndex(
                name: "IX_TimeLog_JobId",
                schema: "DemoSites",
                table: "TimeLog",
                column: "JobId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TimeLog",
                schema: "DemoSites");
        }
    }
}
