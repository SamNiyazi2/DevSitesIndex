using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class FixDemoSitestrg_Timelog_OneOpenRecordOnlyArithmeticoverflowerrorconvertingnumerictodatatypenumeric : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


  

-- 06/01/2019 04:01 pm - SSN - Verify that we don't have more than one open record (null totalSeconds) at a time.
-- 09/28/2019 03:06 pm - SSN - [20190928-1453] Make sure we don't post more than four hours. (c#)
-- 10/29/2019 07:58 am - SSN - [20191029-0759] catch double-click (C#)
-- 12/28/2019 03:47 pm - SSN - Changed from 1 to 0 - We were already excluding #inserted record

-- 12/10/2020 01:36 pm - SSN - Trigger name is stored in a variable for Trigger_NestLevel call

-- 06/01/2021 06:39 pm - SSN - [20210601-1839] - [001] - Correct logic error with attempting to close out newer record when editing a closed one
-- 06/18/2021 08:40 pm - SSN - Error on editing closed record.  Attempting to close current record.
-- 06/22/2021 05:13 am - SSN - Take out. Can't see newer records.
-- 06/22/2021 06:10 am - SSN - We want to close any other open record (should be only one) if this one is new (open)
-- 06/23/2021 02:05 am - SSN - Limit records to applicable user
-- 05/22/2022 08:28 pm - SSN - Arithmetic overflow error converting numeric to data type numeric

ALTER TRIGGER [DemoSites].[trg_Timelog_OneOpenRecordOnly] 
   ON  [DemoSites].[TimeLog]
   AFTER  insert,update
AS 
BEGIN

	SET NOCOUNT ON;
  

	declare @triggerName sysname

	set @triggerName = 'DemoSites.trg_Timelog_OneOpenRecordOnly'

  -- 12/28/2019 04:56 pm - SSN - [20191228-1656] - Use variable tables

   declare @inertedTable table ( TimelogID int, StartTime DateTime2, TotalSeconds int, FK_UserID int ) 
	
   declare @allOtherOpenRecordsTable table ( TimelogID int, StartTime DateTime2 ) 
    


   insert into @inertedTable select TimeLogId, StartTime, TotalSeconds, FK_UserID from inserted
     
  
	insert into @allOtherOpenRecordsTable
	select  [TimeLogId] 
			  ,[StartTime]
		 
		  FROM DemoSites.TimeLog
		  where TotalSeconds is null
		  and FK_UserID in ( select FK_UserID from @inertedTable)
		  and TimeLogId not in ( select TimeLogId from @inertedTable)



-- 09/28/2019 03:06 pm - SSN - [20190928-1453] Make sure we don't post more than four hours.
declare @TotalSeconds_sinceLastTimelog int

-- 06/01/2021 06:39 pm - SSN - [20210601-1839] - [001] - Correct logic error with attempting to close out newer record when editing a closed one
declare @currentRecordIsOpen bit

select  @TotalSeconds_sinceLastTimelog = datediff ( s , DemoSites.TimeLog.StartTime, cc.StartTime ) , 
		@currentRecordIsOpen = case when  cc.TotalSeconds is null then 1 else 0 end 
		
				from @allOtherOpenRecordsTable aa
					cross join  @inertedTable cc
				cross join Demosites.TimeLog 				
				where DemoSites.timelog.TimeLogId = aa.timelogid and DemoSites.TimeLog.TotalSeconds is null 
-- 10/29/2019 07:58 am - SSN - [20191029-0759] catch double-click 
-- 06/22/2021 05:13 am - SSN - Take out. Can't see newer records.
--					and cc.StartTime >= DemoSites.TimeLog.StartTime
					 

	declare @recordsInserted int
	declare @totalSeconds int

	-- 12/28/2019 04:19 pm - SSN - [20191228-1619] - @totalSeconds  Get total seconds from inserted record.  We are checking if we have more than one record.
	declare @openRecordCount int

	select @recordsInserted = count(*) ,  @totalSeconds = max(isnull(TotalSeconds,0))   from @inertedTable

	select @openRecordCount = count(*) from @allOtherOpenRecordsTable


	if ( @recordsInserted = 0 or @openRecordCount = 0 ) return;

	 

	declare @message nvarchar(1000);

	declare @trigger_nestLevel int

	declare @triggerObjectId int

	set @triggerObjectId = object_id ( @triggerName )

	select @trigger_nestLevel = trigger_nestLevel( @triggerObjectId  )
	 

	IF (  @trigger_nestLevel > 1 )  
		begin
			set @message = 'ssn-sql-20190601-1659 - Calling trigger more than once. [' + convert ( varchar , @trigger_nestLevel  ) + '] recordsInserted [' + convert ( varchar , @recordsInserted ) +']  openRecordCount [' + convert ( varchar , @openRecordCount ) + ']'
			;
			throw 50000, @message , 1
		end

	 

	if @recordsInserted > 1
		begin
		;
			throw 50000 , 'ssn-sql-20190601-1607 - Cannot insert more than one record at a time into TimeLog', 2
		end
	
	-- 12/28/2019 03:47 pm - SSN - Changed from 1 to 0 - We were already excluding #inserted record
	-- 12/28/2019 04:19 pm - SSN - [20191228-1619] - @totalSeconds  Get total seconds from inserted record.  We are checking if we have more than one record.
    -- If we are closing an existing record @openRecordCount will be 0
	-- 12/10/2020 01:44 am - SSN - Bug?
	-- if @openRecordCount > iif  (  @totalSeconds is null , 1  , 1  )   -- #inserted record is excluded with except
	if @openRecordCount > 1  -- #inserted record is excluded with except
		begin
			set @message = 'ssn-sql-20190601-1619 - Have more than one open record ' + 
			' [' + convert ( varchar , @openRecordCount)  + '] ' + 
			' @totalSeconds [' + convert ( varchar , @totalSeconds) + ']' +
			' @recordsInserted  [' + CONVERT ( varchar , @recordsInserted ) + '] ' + 
			' (null TotalSeconds in TimeLog). Must fix manually.'
		;
			throw 50000 , @message , 1
		end


	if @openRecordCount = 0 return

		
	-- 09/28/2019 02:53 pm - SSN - [20190928-1453] Make sure we don't post more than four hours.
	if @openRecordCount = 1  and @TotalSeconds_sinceLastTimelog  > 4 * 60 * 60
		begin
-- 05/22/2022 08:28 pm - SSN - Arithmetic overflow error converting numeric to data type numeric
-- Chnaged convert ( decimal(5,2) to convert ( decimal(10,2),
			set @message = formatmessage( 'ssn-sql-20190928-1454 - Trying to automatically post period greater than four hours [%s]. Must fix manually.', convert ( varchar, convert ( decimal(10,2), round( @TotalSeconds_sinceLastTimelog / (60*60.0) ,2)  ) ))
		;
			throw 50000 , @message , 1
		end

-- 06/18/2021 08:40 pm - SSN - Error on editing closed record.  Attempting to close current record.
-- 06/22/2021 06:10 am - SSN - We want to close any other open record (should be only one) if this one is new (open)

-- See reference to @openRecordCount = 1  - Must be one record only.
	if @openRecordCount = 1 and @currentRecordIsOpen = 1
		begin
			-- 06/23/2021 12:16 am - SSN - Replaced
			--update DemoSites.TimeLog  set TotalSeconds = datediff ( s , DemoSites.TimeLog.StartTime, cc.StartTime ) 
			--	from @allOtherOpenRecordsTable aa
			--		cross join  @inertedTable cc
						
			--	where DemoSites.timelog.TimeLogId = aa.timelogid and DemoSites.TimeLog.TotalSeconds is null 
			--		and cc.StartTime > DemoSites.TimeLog.StartTime


				;
			with   y as 
			(
				select top 1 bb.TimeLogId bb_TimeLogId, aa.StartTime q1_startTime, datediff ( s, bb.StartTime, aa.startTime)   Calc_totalSecond 
					from DemoSites.TimeLog aa
					cross join @allOtherOpenRecordsTable bb  -- should be one record only  @openRecordCount = 1
					cross join @inertedTable cc
					where aa.FK_UserID = cc.FK_UserID
						and aa.StartTime > bb.StartTime
						order by aa.startTime , bb.StartTime 
			)
			update DemoSites.TimeLog 
					set totalseconds = Calc_totalSecond
				from y
				where demosites.timelog.timelogid = bb_TimeLogId



-- 12/10/2020 01:57 pm - SSN - If failed to update, throw an error.
			if ( @@ROWCOUNT = 0 ) 

				begin
					set @message = 'ssn-sql-20201210-1358 - Failed to close open record. Must fix manually.'
				;
					throw 50000 , @message , 1
				end

		end
		 

end




");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
// Don't roll back.
        }
    }
}
