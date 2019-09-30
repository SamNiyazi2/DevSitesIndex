using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class trg_Timelog_OneOpenRecordOnlymodificationProject_Index_SearchAdded2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

 

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)

create procedure [DemoSites].[Project_Index_Search]
(
	@searchterm nvarchar(1000),
	@tablesIncluded varchar(10),

	@recordsPerPage int = 20,
	@pageNo int = 1 ,
	@sortColumn varchar(128) = null ,
	@desc bit = 0

)
AS


declare @includeProjects bit
declare @includeJobs bit
declare @includeTimelog bit


set @includeProjects = case when CHARINDEX( '1' , @tablesIncluded ) > 0 then 1 else 0 end 
set @includeJobs = case when CHARINDEX( '2' , @tablesIncluded ) > 0 then 1 else 0 end 
set @includeTimelog = case when CHARINDEX( '3' , @tablesIncluded ) > 0 then 1 else 0 end 


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(100))

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			[ProjectTitle]
      
		FROM [Testing].[DemoSites].[Projects] with (nolock)
	
		where @includeProjects = 1 and contains ( ProjectTitle , @searchTerm )  


	union all


	SELECT  
			2 as TableID,
			ProjectID,
			[JobID],
			null as TimelogId,
			coalesce  ( [DateUpdated], [DateAdded]),
			[JobTitle]
			--,
			--[Job_StatusID]

		FROM [Testing].[DemoSites].[Jobs] with (nolock)
  
		where @includeJobs = 1 and  contains ( [JobTitle] , @searchTerm )  



	union all


	SELECT  

			3 as TableID,
			null as ProjcetId,
			[JobId],
			[TimeLogId],
			coalesce ( [DateModified], [DateAdded] ) ,
			[WorkDetail]
	--,
	--		[DisciplineID],

		FROM [Testing].[DemoSites].[TimeLog] with (nolock)

		where @includeTimelog = 1 and  contains ( [WorkDetail] , @searchTerm )  


select 
	TableID,
	case TableID when 1 then 'Project' when 2 then 'Job' when 3 then 'Timelog' else 'Error-SourceTable' end SourceTable,
	ProjectId  , JobID  , TimelogID  , LastActivity , Description
		
from @table 

	 
	order by lastActivity desc	





-- 09/27/2019 10:04 am - SSN - Add stats results

declare @totalRecordCount int


select @totalRecordCount = count(*) FROM @table aa 

select	@recordsPerPage			as RecordsPerpage , 
		@pageNo					as CurrentPageNo , 
		@totalRecordCount		as TotalRecordCount, 
		@sortColumn				as ColumnName, 
		@desc					as [desc], 
		@tablesIncluded			as tablesIncluded
 


 

");




            migrationBuilder.Sql(@"

 
-- 06/01/2019 04:01 pm - SSN - Verify that we don't have more than one open record (null totalSeconds) at a time.
-- 09/28/2019 03:06 pm - SSN - [20190928-1453] Make sure we don't post more than four hours. (c#)

ALTER TRIGGER [DemoSites].[trg_Timelog_OneOpenRecordOnly] 
   ON  [DemoSites].[TimeLog]
   AFTER  insert,update
AS 
BEGIN

	SET NOCOUNT ON;
  
   
  
	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #inserted
		  FROM inserted

	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #deleted
		  FROM deleted

	select  [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #openRecords
		  FROM DemoSites.TimeLog
		  where TotalSeconds is null
		  except select * from #inserted



-- 09/28/2019 03:06 pm - SSN - [20190928-1453] Make sure we don't post more than four hours.
declare @TotalSeconds_sinceLastTimelog int

select @TotalSeconds_sinceLastTimelog = datediff ( s , DemoSites.TimeLog.StartTime, cc.StartTime ) 
				from #openRecords aa
					cross join  #inserted cc
				cross join Demosites.TimeLog 				
				where DemoSites.timelog.TimeLogId = aa.timelogid and DemoSites.TimeLog.TotalSeconds is null 
					and cc.StartTime > DemoSites.TimeLog.StartTime



	declare @recordsInserted int

	declare @openRecordCount int

	select @recordsInserted = count(*) from #inserted

	select @openRecordCount = count(*) from #openRecords


	if ( @recordsInserted = 0 or @openRecordCount = 0 ) return;




	declare @message varchar(1000);

	IF ( (SELECT trigger_nestlevel() ) > 1 )  
		begin
			set @message = 'ssn-sql-20190601-1659 - Calling trigger more than once. [' + convert ( varchar , TRIGGER_NESTLEVEL() ) + '] recordsInserted [' + convert ( varchar , @recordsInserted ) +']  openRecordCount [' + convert ( varchar , @openRecordCount ) + ']'
			;
			throw 50000, @message , 1
		end

	
	if @recordsInserted > 1
		begin
		;
			throw 50000 , 'ssn-sql-20190601-1607 - Cannot insert more than one record at a time into TimeLog', 2
		end
	
	if @openRecordCount > 1  -- #inserted record is excluded with except
		begin
			set @message = 'ssn-sql-20190601-1619 - Have more than one open record  [' + convert ( varchar , @openRecordCount) + '] (null TotalSeconds in TimeLog). Must fix manually.'
		;
			throw 50000 , @message , 1
		end


	if @openRecordCount = 0 return

		
	-- 09/28/2019 02:53 pm - SSN - [20190928-1453] Make sure we don't post more than four hours.
	if @openRecordCount = 1  and @TotalSeconds_sinceLastTimelog  > 4 * 60 * 60
		begin
			set @message = 'ssn-sql-20190928-1454 - Trying to automatically post period greater than four hours [' + convert ( varchar , @TotalSeconds_sinceLastTimelog) + ']. Must fix manually.'
		;
			throw 50000 , @message , 1
		end


	if @openRecordCount = 1
		begin
			update DemoSites.TimeLog  set TotalSeconds = datediff ( s , DemoSites.TimeLog.StartTime, cc.StartTime ) 
				from #openRecords aa
					cross join  #inserted cc
						
				where DemoSites.timelog.TimeLogId = aa.timelogid and DemoSites.TimeLog.TotalSeconds is null 
					and cc.StartTime > DemoSites.TimeLog.StartTime
		end
		 

end


");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

if exists ( select 1 from sys.objects where name = 'Project_Index_Search' )
begin
	print 'Dropping procedure'
	drop procedure [DemoSites].[Project_Index_Search] 
end

");




            migrationBuilder.Sql(@"


 
-- 06/01/2019 04:01 pm - SSN - Verify that we don't have more than one open record (null totalSeconds) at a time.
-- c#

ALTER TRIGGER [DemoSites].[trg_Timelog_OneOpenRecordOnly] 
   ON  [DemoSites].[TimeLog]
   AFTER  insert,update
AS 
BEGIN

	SET NOCOUNT ON;
  
   
  
	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #inserted
		  FROM inserted

	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #deleted
		  FROM deleted

	select  [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #openRecords
		  FROM DemoSites.TimeLog
		  where TotalSeconds is null
		  except select * from #inserted


	declare @recordsInserted int

	declare @openRecordCount int

	select @recordsInserted = count(*) from #inserted

	select @openRecordCount = count(*) from #openRecords


	if ( @recordsInserted = 0 or @openRecordCount = 0 ) return;




	declare @message varchar(1000);

	IF ( (SELECT trigger_nestlevel() ) > 1 )  
		begin
			set @message = 'ssn-sql-20190601-1659 - Calling trigger more than once. [' + convert ( varchar , TRIGGER_NESTLEVEL() ) + '] recordsInserted [' + convert ( varchar , @recordsInserted ) +']  openRecordCount [' + convert ( varchar , @openRecordCount ) + ']'
			;
			throw 50000, @message , 1
		end

	
	if @recordsInserted > 1
		begin
		;
			throw 50000 , 'ssn-sql-20190601-1607 - Cannot insert more than one record at a time into TimeLog', 2
		end
	
	if @openRecordCount > 1  -- #inserted record is excluded with except
		begin
			set @message = 'ssn-sql-20190601-1619 - Have more than one open record  [' + convert ( varchar , @openRecordCount) + '] (null TotalSeconds in TimeLog). Must fix manually.'
		;
			throw 50000 , @message , 1
		end


	if @openRecordCount = 0 return

	if @openRecordCount = 1
		begin
			update DemoSites.TimeLog  set TotalSeconds = datediff ( s , DemoSites.TimeLog.StartTime, cc.StartTime ) 
				from #openRecords aa
					cross join  #inserted cc
						
				where DemoSites.timelog.TimeLogId = aa.timelogid and DemoSites.TimeLog.TotalSeconds is null 
					and cc.StartTime > DemoSites.TimeLog.StartTime
		end
		 

end
 


");



        }
    }
}
