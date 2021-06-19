using Microsoft.EntityFrameworkCore.Migrations;

// 06/18/2021 10:44 pm - SSN - Save original workDeail

namespace DevSitesIndex.Migrations
{
    public partial class TimeLogwithprepostlineitemworkdetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"





BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;


CREATE TABLE [DemoSites].[TimeLog_Arch_temp_20210618](
	[TimeLogId] [int] NOT NULL,
	[DateAdded] [datetime2](0) NOT NULL,
	[DateModified] [datetime2](0) NULL,
	[DisciplineID] [int] NOT NULL,
	[JobId] [int] NOT NULL,
	[StartTime] [datetime2](0) NOT NULL,
	[TotalSeconds] [int] NULL,
	[WorkDetail] [nvarchar](max) NULL,
	[RowVersion] [varbinary](50) NULL,
	[LineItemId] [int] NULL,
	[WorkDetail_PostLineItem] [nvarchar](max) NULL,
	[WorkDetail_PreLineItem] [nvarchar](max) NULL,
	[Date_Archived] [datetime] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


insert into [DemoSites].[TimeLog_Arch_temp_20210618]
([TimeLogId], [DateAdded], [DateModified], [DisciplineID], [JobId], [StartTime], [TotalSeconds], [WorkDetail], [RowVersion], [lineitemid], [Date_Archived] )
        SELECT [TimeLogId],
               [DateAdded],
               [DateModified],
               [DisciplineID],
               [JobId],
               [StartTime],
               [TotalSeconds],
               [WorkDetail],
               [RowVersion],
			   [lineitemid] ,
               [Date_Archived]

	from [DemoSites].[TimeLog_Arch]


DROP TABLE [DemoSites].[TimeLog_Arch];

EXECUTE sp_rename N'[DemoSites].[TimeLog_Arch_temp_20210618]', N'TimeLog_Arch';



COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;




");




            migrationBuilder.AddColumn<string>(
                name: "WorkDetail_PostLineItem",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkDetail_PreLineItem",
                schema: "DemoSites",
                table: "TimeLog",
                nullable: true);





        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WorkDetail_PostLineItem",
                schema: "DemoSites",
                table: "TimeLog");

            migrationBuilder.DropColumn(
                name: "WorkDetail_PreLineItem",
                schema: "DemoSites",
                table: "TimeLog");
        }
    }
}
