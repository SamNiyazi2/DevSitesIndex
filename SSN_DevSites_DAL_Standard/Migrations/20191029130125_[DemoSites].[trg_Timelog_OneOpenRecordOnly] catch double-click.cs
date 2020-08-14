using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class DemoSitestrg_Timelog_OneOpenRecordOnlycatchdoubleclick : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {



            migrationBuilder.Sql(@"


 
-- 06/01/2019 04:01 pm - SSN - Verify that we don't have more than one open record (null totalSeconds) at a time.
-- 09/28/2019 03:06 pm - SSN - [20190928-1453] Make sure we don't post more than four hours. (c#)

-- 10/29/2019 07:58 am - SSN - [20191029-0759] catch double-click (C#)

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
-- 10/29/2019 07:58 am - SSN - [20191029-0759] catch double-click 
					and cc.StartTime >= DemoSites.TimeLog.StartTime



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












            migrationBuilder.Sql(@"


-- 06/01/2019 08:37 pm - SSN - Timelog - daily
-- 09/14/2019 10:41 am - SSN - Revised to breakup records by calendar day
-- 10/29/2019 08:12 am - SSN - [20191029-0812] (12) to (12,2) (C#)

ALTER proc [DemoSites].[timelog_Daily]

as


declare @table_Source table ( RowNo int, StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( WorkDate datetime, TotalSeconds float) 

;

with x1 as
(
	select row_number() over ( order by starttime) RowNo , 
	starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	  FROM [DemoSites].[TimeLog] with (nolock)

) 
insert into @table_Source 
	select * from x1

;

with x2 as

(
	select StartTime  , StopTime  from @table_Source where day(StartTime) = day(StopTime)
	union all 
	select StartTime  , dateadd( ms , 0 ,  datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) )  from @table_Source where day(StartTime) <> day(StopTime)
	union all 
	select datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) , StopTime  from @table_Source where day(StartTime) <> day(StopTime)

),  y2 as
(
	select datediff ( s , startTime, StopTime ) TotalSeconds, StartTime 
		from x2
)
insert into @table_summary
	select datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ), TotalSeconds
		from y2 

;


with x3 as
(
	select
		DATEPART ( YYYY, WorkDate ) Year1,
		DATEPART ( M, WorkDate) Month1,
		DATEPART ( D, WorkDate ) Day1,
		sum (TotalSeconds) As TotalSeconds

	from @table_summary

	group by
		DATEPART ( YYYY, WorkDate)  ,
		DATEPART ( M, WorkDate ) ,
		DATEPART ( D, WorkDate ) 

)

SELECT 

		year1,
		month1,
		day1 , 
		cast( round( TotalSeconds/(60.0*60.0), 2) as numeric(12,2 ))

	FROM x3

	order by 
			 year1,
			 month1,
			 day1

-- 10/29/2019 08:12 am - SSN - [20191029-0812] (12) to (12,2) 
declare @totalSeconds1 numeric(12,2)
declare @totalSeconds2 numeric(12,2)

select @totalSeconds1  = sum( Totalseconds )   
	FROM [DemoSites].[TimeLog] with (nolock)


select @totalSeconds2  = sum( Totalseconds )   
	from @table_summary

if  @totalSeconds1 <> @totalSeconds2
	begin
		declare @errorMessage varchar(2048)
		
		set @errorMessage =  'SSN-SQL-20190914-1054 Mismatched totals seconds [' + convert ( varchar , @totalSeconds1 ) + '] vs. [' + convert ( varchar , @totalSeconds2 ) + '].'
		;
		throw 50001, @errorMessage , 1
		 
	end
");

















            migrationBuilder.Sql(@"



-- 10/29/2019 04:21 am - SSN - Timelog by project
-- 10/29/2019 05:47 am - SSN - Migration
-- 10/29/2019 06:16 am - SSN - Order top 20 

ALTER procedure [DemoSites].[TimeLog_ByProject]

as

;
with x as (

select min(aa.StartTime) FirstDate, ProjectTitle, 
		cast ( SUM( TotalSeconds / 3600.0  ) as numeric(9,2))  TotalHours 
	from demosites.timelog aa with (nolock)
	
		inner join DemoSites.Jobs bb with (nolock)
			on aa.JobId= bb.JobID
		inner join DemoSites.Projects cc with (nolock)
			on bb.ProjectID = cc.ProjectID 
		
	group by ProjectTitle
),
 y as
(

select top 10 * from x
	order by totalHours desc 
)

select * from y 
	order by ProjectTitle



");













            migrationBuilder.Sql(@"


-- 06/01/2019 08:37 pm - SSN - Timelog - daily
-- 09/14/2019 10:41 am - SSN - Revised to breakup records by calendar day
-- 10/30/2019 08:37am - SSN - [20191030-0338] (12) to (12.2)

ALTER proc [DemoSites].[timelog_Daily]

as


declare @table_Source table ( RowNo int, StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( WorkDate datetime, TotalSeconds float) 

;

with x1 as
(
	select row_number() over ( order by starttime) RowNo , 
	starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	  FROM [DemoSites].[TimeLog] with (nolock)

) 
insert into @table_Source 
	select * from x1

;

with x2 as

(
	select StartTime  , StopTime  from @table_Source where day(StartTime) = day(StopTime)
	union all 
	select StartTime  , dateadd( ms , 0 ,  datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) )  from @table_Source where day(StartTime) <> day(StopTime)
	union all 
	select datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) , StopTime  from @table_Source where day(StartTime) <> day(StopTime)

),  y2 as
(
	select datediff ( s , startTime, StopTime ) TotalSeconds, StartTime 
		from x2
)
insert into @table_summary
	select datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ), TotalSeconds
		from y2 

;


with x3 as
(
	select
		DATEPART ( YYYY, WorkDate ) Year1,
		DATEPART ( M, WorkDate) Month1,
		DATEPART ( D, WorkDate ) Day1,
		sum (TotalSeconds) As TotalSeconds

	from @table_summary

	group by
		DATEPART ( YYYY, WorkDate)  ,
		DATEPART ( M, WorkDate ) ,
		DATEPART ( D, WorkDate ) 

)

SELECT 

		year1,
		month1,
		day1 , 
		cast( round( TotalSeconds/(60.0*60.0), 2) as numeric(12,2 ))

	FROM x3

	order by 
			 year1,
			 month1,
			 day1

-- 10/30/2019 08:37am - SSN - [20191030-0338] (12) to (12.2)

declare @totalSeconds1 numeric(12,2)
declare @totalSeconds2 numeric(12,2)

select @totalSeconds1  = sum( Totalseconds )   
	FROM [DemoSites].[TimeLog] with (nolock)


select @totalSeconds2  = sum( Totalseconds )   
	from @table_summary

if  @totalSeconds1 <> @totalSeconds2
	begin
		declare @errorMessage varchar(2048)
		
		set @errorMessage =  'SSN-SQL-20190914-1054 Mismatched totals seconds [' + convert ( varchar , @totalSeconds1 ) + '] vs. [' + convert ( varchar , @totalSeconds2 ) + '].'
		;
		throw 50001, @errorMessage , 1
		 
	end

");














            migrationBuilder.Sql(@"



if exists ( select 1 from sys.objects where name = 'timelog_SummaryByDailyWorkHours' )
begin
	print 'Drop procedure...'
	drop procedure demosites.timelog_SummaryByDailyWorkHours
end

go

-- 10/29/2019 11:32 am - SSN - [20191029-0747] - [007] - Timesheet dashboard - Daily work hour summary
-- 10/30/2019 08:41 am - SSN - (C#)

create  proc [DemoSites].[Timelog_SummaryByDailyWorkHours]

as


declare @table_Source table ( DisciplineID int , RowNo int, StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( DisciplineID int , WorkDate datetime, TotalSeconds float) 
 
;

with x1 as
(
	select DisciplineID, row_number() over ( order by starttime) RowNo , 
	starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	

	  FROM [DemoSites].[TimeLog] with (nolock)
	  where TotalSeconds is not null 

) 
insert into @table_Source 
	select * from x1

;

with x2 as

(
	select DisciplineID , StartTime  , StopTime  from @table_Source where day(StartTime) = day(StopTime)
	union all 
	select DisciplineID , StartTime  , dateadd( ms , 0 ,  datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) )  from @table_Source where day(StartTime) <> day(StopTime)
	union all 
	select DisciplineID , datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) , StopTime  from @table_Source where day(StartTime) <> day(StopTime)

),  y2 as
(
	select DisciplineID , datediff ( s , startTime, StopTime ) TotalSeconds, StartTime 
		from x2
)
insert into @table_summary
	select DisciplineID , datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ), TotalSeconds
		from y2 

;

declare @table_disciplines table ( RowNo int, DisciplineID int, FinalDisciplineID int, Discipline varchar(100), IsMaster bit )
insert into @table_disciplines  
select ROW_NUMBER() over ( order by  SUM(totalseconds)  desc ) , aa.DisciplineID, aa.DisciplineID, bb.DisciplineShort , 1 
		--, SUM(totalseconds) 
	from @table_summary aa
		left join demosites.Disciplines  bb
			on aa.DisciplineID = bb.DisciplineId 
	group by aa.DisciplineID , bb.DisciplineShort 
	order by SUM(totalseconds)  desc 

 update @table_disciplines set FinalDisciplineID = 9999, IsMaster = 0 where RowNo > 3
 insert into @table_disciplines values ( 4 , 9999 , 9999, 'Other', 1)

 
;


with x3 as
(
	select
		
		cc.Discipline, 
		DATEPART ( YYYY, WorkDate ) Year1,
		DATEPART ( M, WorkDate) Month1,
		DATEPART ( D, WorkDate ) Day1,
		sum (TotalSeconds) As TotalSeconds

	from @table_summary aa
		left join @table_disciplines bb
			on aa.DisciplineID = bb.DisciplineID 
		left join @table_disciplines cc
			on bb.FinalDisciplineID = cc.DisciplineID  

	group by
		cc.Discipline, 
		DATEPART ( YYYY, WorkDate)  ,
		DATEPART ( M, WorkDate ) ,
		DATEPART ( D, WorkDate ) 

)

SELECT 
 
		bb.RowNo, bb.Discipline, 
		 
		nYear,
		nMonth,
		nDay , 
		cast( round( TotalSeconds/(60.0*60.0), 2) as numeric(12,2 )) TotalHours

	FROM ( select distinct 
				DATEPART ( YYYY, cc.WorkDate ) nYear  ,
				DATEPART ( M, cc.WorkDate ) nMonth   ,
				DATEPART ( D, cc.WorkDate  ) nDay   
				, bb.RowNo , bb.Discipline , bb.IsMaster  
		 from @table_summary cc
			cross join @table_disciplines bb where bb.IsMaster = 1   
		) as bb
		left join  x3 aa
			on bb.nYear = aa.Year1 
				and bb.nMonth = aa.Month1 
				and bb.nDay = aa.Day1
				and bb.Discipline = aa.Discipline 


		
	order by
			 
			 bb.Discipline,
			 nyear,
			 nmonth,
			 nday,
			 bb.RowNo


declare @totalSeconds1 numeric(12)
declare @totalSeconds2 numeric(12)

select @totalSeconds1  = sum( Totalseconds )   
	FROM [DemoSites].[TimeLog] with (nolock)
	where TotalSeconds is not null


select @totalSeconds2  = sum( Totalseconds )   
	from @table_summary

if  @totalSeconds1 <> @totalSeconds2
	begin
		declare @errorMessage varchar(2048)
		
		set @errorMessage =  'SSN-SQL-20190914-1054 Mismatched totals seconds [' + convert ( varchar , @totalSeconds1 ) + '] vs. [' + convert ( varchar , @totalSeconds2 ) + '].'
		;
		throw 50001, @errorMessage , 1
		 
	end



");




























        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {



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











            migrationBuilder.Sql(@"

-- 06/01/2019 08:37 pm - SSN - Timelog - daily
-- 09/14/2019 10:41 am - SSN - Revised to breakup records by calendar day

ALTER proc [DemoSites].[timelog_Daily]

as


declare @table_Source table ( RowNo int, StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( WorkDate datetime, TotalSeconds float) 

;

with x1 as
(
	select row_number() over ( order by starttime) RowNo , 
	starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	  FROM [DemoSites].[TimeLog] with (nolock)

) 
insert into @table_Source 
	select * from x1

;

with x2 as

(
	select StartTime  , StopTime  from @table_Source where day(StartTime) = day(StopTime)
	union all 
	select StartTime  , dateadd( ms , 0 ,  datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) )  from @table_Source where day(StartTime) <> day(StopTime)
	union all 
	select datetimefromparts ( year(StopTime), month(StopTime), day(StopTime) , 0, 0, 0 , 0 ) , StopTime  from @table_Source where day(StartTime) <> day(StopTime)

),  y2 as
(
	select datediff ( s , startTime, StopTime ) TotalSeconds, StartTime 
		from x2
)
insert into @table_summary
	select datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ), TotalSeconds
		from y2 

;


with x3 as
(
	select
		DATEPART ( YYYY, WorkDate ) Year1,
		DATEPART ( M, WorkDate) Month1,
		DATEPART ( D, WorkDate ) Day1,
		sum (TotalSeconds) As TotalSeconds

	from @table_summary

	group by
		DATEPART ( YYYY, WorkDate)  ,
		DATEPART ( M, WorkDate ) ,
		DATEPART ( D, WorkDate ) 

)

SELECT 

		year1,
		month1,
		day1 , 
		cast( round( TotalSeconds/(60.0*60.0), 2) as numeric(12,2 ))

	FROM x3

	order by 
			 year1,
			 month1,
			 day1


declare @totalSeconds1 numeric(12)
declare @totalSeconds2 numeric(12)

select @totalSeconds1  = sum( Totalseconds )   
	FROM [DemoSites].[TimeLog] with (nolock)


select @totalSeconds2  = sum( Totalseconds )   
	from @table_summary

if  @totalSeconds1 <> @totalSeconds2
	begin
		declare @errorMessage varchar(2048)
		
		set @errorMessage =  'SSN-SQL-20190914-1054 Mismatched totals seconds [' + convert ( varchar , @totalSeconds1 ) + '] vs. [' + convert ( varchar , @totalSeconds2 ) + '].'
		;
		throw 50001, @errorMessage , 1
		 
	end


");









        }
    }
}
