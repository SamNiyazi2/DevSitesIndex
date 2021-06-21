using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AspNetUsersdataandaddingpkuserid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"



GO
PRINT N'Altering [dbo].[AspNetUsers]...';


GO
ALTER TABLE [dbo].[AspNetUsers]
    ADD [PK_UserID] INT IDENTITY (1, 1) NOT NULL;


GO
PRINT N'Creating [dbo].[AspNetUsers].[IX_AspNetUsers_PK_UserID]...';


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_AspNetUsers_PK_UserID]
    ON [dbo].[AspNetUsers]([PK_UserID] ASC);


GO
PRINT N'Altering [DemoSites].[TimeLog]...';


GO
ALTER TABLE [DemoSites].[TimeLog]
    ADD [FK_UserID] INT NULL;


GO

disable trigger trg_Timelog_arch on demosites.timelog

go

declare @PK_UserID int

SELECT  @PK_UserID  = [PK_UserID]
  FROM [dbo].[AspNetUsers]
  where username = 'sam@niyazi.com'


  update [DemoSites].[TimeLog] set fk_userid = @PK_UserID
  go

enable trigger trg_Timelog_arch on demosites.timelog

go


PRINT N'Starting rebuilding table [DemoSites].[TimeLog_Arch]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

declare @PK_UserID int

SELECT  @PK_UserID  = [PK_UserID]
  FROM  [dbo].[AspNetUsers]
  where username = 'sam@niyazi.com'

 
CREATE TABLE [DemoSites].[tmp_ms_xx_TimeLog_Arch] (
    [TimeLogId]               INT            NOT NULL,
    [DateAdded]               DATETIME2 (0)  NOT NULL,
    [DateModified]            DATETIME2 (0)  NULL,
    [DisciplineID]            INT            NOT NULL,
    [JobId]                   INT            NOT NULL,
    [StartTime]               DATETIME2 (0)  NOT NULL,
    [TotalSeconds]            INT            NULL,
    [WorkDetail]              NVARCHAR (MAX) NULL,
    [RowVersion]              VARBINARY (50) NULL,
    [LineItemId]              INT            NULL,
    [WorkDetail_PostLineItem] NVARCHAR (MAX) NULL,
    [WorkDetail_PreLineItem]  NVARCHAR (MAX) NULL,
    [FK_UserID]               INT            NULL,
    [Date_Archived]           DATETIME       NOT NULL
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [DemoSites].[TimeLog_Arch])
    BEGIN
        INSERT INTO [DemoSites].[tmp_ms_xx_TimeLog_Arch] ([TimeLogId], [DateAdded], [DateModified], [DisciplineID], [JobId], [StartTime], [TotalSeconds], [WorkDetail], [RowVersion], [LineItemId], [WorkDetail_PostLineItem], [WorkDetail_PreLineItem], fk_userid, [Date_Archived])
        SELECT [TimeLogId],
               [DateAdded],
               [DateModified],
               [DisciplineID],
               [JobId],
               [StartTime],
               [TotalSeconds],
               [WorkDetail],
               [RowVersion],
               [LineItemId],
               [WorkDetail_PostLineItem],
               [WorkDetail_PreLineItem],

				@pk_userid,

			   [Date_Archived]
        FROM   [DemoSites].[TimeLog_Arch];
    END

DROP TABLE [DemoSites].[TimeLog_Arch];

EXECUTE sp_rename N'[DemoSites].[tmp_ms_xx_TimeLog_Arch]', N'TimeLog_Arch';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Refreshing [DemoSites].[Excel_Source]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Excel_Source]';


GO
PRINT N'Refreshing [DemoSites].[Timelog_Update_WorkDetail_Less_LineItem]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelog_Update_WorkDetail_Less_LineItem]';


GO
PRINT N'Refreshing [dbo].[Timelog_Summary_By_YMD]...';


GO
EXECUTE sp_refreshsqlmodule N'[dbo].[Timelog_Summary_By_YMD]';


GO
PRINT N'Refreshing [DemoSites].[Project_Index_Search]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Project_Index_Search]';


GO
PRINT N'Refreshing [DemoSites].[TimeLog_ByDiscipline]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[TimeLog_ByDiscipline]';


GO
PRINT N'Refreshing [DemoSites].[TimeLog_ByProject]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[TimeLog_ByProject]';


GO
PRINT N'Refreshing [DemoSites].[TimeLog_ConflictCheck_Test]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[TimeLog_ConflictCheck_Test]';


GO
PRINT N'Refreshing [DemoSites].[timelog_Daily]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[timelog_Daily]';


GO
PRINT N'Refreshing [DemoSites].[Timelog_Extract_LineItem]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelog_Extract_LineItem]';


GO
PRINT N'Refreshing [DemoSites].[Timelog_MoveLineItems]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelog_MoveLineItems]';


GO
PRINT N'Refreshing [DemoSites].[Timelog_SummaryByDailyWorkHours]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelog_SummaryByDailyWorkHours]';


GO
PRINT N'Refreshing [DemoSites].[Timelog_SummaryByWeekAndDiscipline]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelog_SummaryByWeekAndDiscipline]';


GO
PRINT N'Refreshing [DemoSites].[timelog_Validate]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[timelog_Validate]';


GO
PRINT N'Refreshing [DemoSites].[Timelogs_Search]...';


GO
EXECUTE sp_refreshsqlmodule N'[DemoSites].[Timelogs_Search]';


GO
PRINT N'Refreshing [dbo].[Timelog_Summary_By_YM_Rollup]...';


GO
EXECUTE sp_refreshsqlmodule N'[dbo].[Timelog_Summary_By_YM_Rollup]';


GO
PRINT N'Update complete.';

 
GO
PRINT N'Dropping [DemoSites].[DF__DevSites__DateAd__1AD3FDA4]...';


GO
ALTER TABLE [DemoSites].[DevSites] DROP CONSTRAINT [DF__DevSites__DateAd__1AD3FDA4];


GO
PRINT N'Update complete.';


");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
