using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Timelog_SummaryByWeekAndDisciplineRevised : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {




            migrationBuilder.Sql(@"




-- 10/30/2019 01:58 pm - SSN - create proc demosites.Timelog_SummaryByWorkDayAndDiscipline
-- 10/31/2019 11:14 am - SSN - Revise

 ALTER proc [DemoSites].[Timelog_SummaryByWeekAndDiscipline]

 as

declare @table_Source table ( DisciplineID int ,   StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( DisciplineID int index x1 , WorkDate date index x2, temptemp bit, TotalHours decimal(12,2), TotalSeconds decimal) 
 
  


;

with x1 as
(
	select DisciplineID,   starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	
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

)
,  y2 as

-- 10/31/2019 11:14 am - SSN - Revise
(
	select DisciplineID , 
			cast ( round( datediff ( s , startTime, StopTime ) / (60.0*60.0), 2) as decimal(12,2))   TotalHours,
			datediff ( s , startTime, StopTime ) TotalSeconds, 
			datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ) WorkDate

		from x2
)
, y3 as
(
	select DisciplineID , 
		WorkDate, 
		sum(TotalHours) TotalHours,
		sum(TotalSeconds) TotalSeconds
		
		from y2 
		
		group by 
			DisciplineID , 
			WorkDate
)
insert into @table_summary
	select DisciplineID , 
		WorkDate, 
		0,
		TotalHours,
		TotalSeconds
		from y3





;

declare @table_disciplines table ( RowNo int, DisciplineID int primary key  )

insert into @table_disciplines  
	select ROW_NUMBER() over ( order by  SUM(totalseconds)  desc ) , aa.DisciplineID  
		from @table_summary aa
		group by aa.DisciplineID 
		order by SUM(totalseconds)  desc 

 







;

-- wk = Week of the year
-- dw = Day of the week

declare @table_Date_master table ( WeekEnding date , nYear int, wk int , dw int, RowNo int , DisciplineID int )

declare @firstDate date

select @firstDate = MIN(workdate) from @table_summary

while ( DATEPART ( dw , @firstDate ) <> 1 )
	begin
		set @firstDate  = DATEADD ( d , -1 , @firstDate )
	end


declare @maxrecursion int
set @maxrecursion = (DATEDIFF ( d , @firstDate, getdate())) 


 
if @maxrecursion > 32767
begin
	set @maxrecursion = 32767
end
;
with x as
(

	select 0  line2 -- Start at 0 to include firstDate 
	union all
	select line2 + 7  from x 
	where x.line2 < (@maxrecursion)

)

, y as 

(
	select DATEADD ( day , line2, @firstDate ) WorkDate from x
)
insert into @table_Date_master 
	select WorkDate, DATEPART ( year, WorkDate) , DATEPART ( WK, WorkDate) , DATEPART ( dw, WorkDate) 
			, bb.RowNo , bb.DisciplineID
		from y
			cross join @table_disciplines bb 

option ( maxrecursion 32767)
 
 ;


declare @table_Final table ( DisciplineID int , WeekEnding Date, TotalHours Decimal(12,2))
;
with x3 as

(
	select
		
		DisciplineID, 
		DATEADD ( d ,  case when datepart( dw, WorkDate) = 1 then 0 else - datepart( dw, WorkDate) + 8 end ,WorkDate )  WeekEnding,
		sum ( aa.TotalHours) as TotalHours

	from @table_summary aa


	group by
		DATEADD ( d ,  case when datepart( dw, WorkDate) = 1 then 0 else - datepart( dw, WorkDate) + 8 end ,WorkDate ) ,
		DisciplineID

)
insert into @table_Final 
	select * from x3 
	 

	 --select * from @table_Final
		--where WeekEnding = '09/01/2019'

declare @totalSeconds1 numeric(12,2)
declare @totalSeconds2 numeric(12,2)
declare @totalSeconds3 numeric(12,2)
declare @totalHours1 numeric(12,2)
declare @totalHours2 numeric(12,2)

select @totalSeconds1  = sum( Totalseconds )   
	FROM [DemoSites].[TimeLog] with (nolock)
	where TotalSeconds is not null


select @totalSeconds2  = sum( Totalseconds )   , @totalHours1  = SUM(totalhours) 
	from @table_summary


select  @totalHours2  = SUM(totalhours) 
	from @table_final

-- Error checks must be run before return final results.

if  @totalSeconds1 <> @totalSeconds2
	begin
		declare @errorMessage varchar(2048)
		
		set @errorMessage =  'SSN-SQL-20191030-1229 Mismatched totals seconds [' + convert ( varchar , @totalSeconds1 ) + '] vs. [' + convert ( varchar , @totalSeconds2 ) + '].'
		;
		throw 50001, @errorMessage , 1
		 
	end

	 

	 
if  @totalHours1 <> @totalHours2
	begin
		
		set @errorMessage =  'SSN-SQL-20191030-1703 Mismatched totals hours [' + convert ( varchar , @totalHours1 ) + '] vs. [' + convert ( varchar , @totalHours2 ) + '].'
		;
		throw 50001, @errorMessage , 11
		--raiserror (@errorMessage, 11, 1 )
	end

	 


-- Must be run after checks in order to capture error.

	 
SELECT 
		ROW_NUMBER() over ( order by dm.WeekEnding , DisciplineShort  ) SeqNo,
		CONVERT (VARCHAR (10), dm.WeekEnding, 101) WeekEnding ,
		dm.nYear,
		dm.wk, -- Week of the year
--		dm.dw, -- Day og the week
		dm.RowNo, 
		dm.Disciplineid, 
		dd.DisciplineShort,

		--cast( round( TotalSeconds/(60.0*60.0), 2) as numeric(12,2 )) TotalHours
		TotalHours

	FROM @table_Date_master dm  

		left join DemoSites.Disciplines dd with (nolock)
			on dd.DisciplineId = dm.DisciplineID 
		
		left join  @table_Final  aa  -- x3
			on		dm.WeekEnding= aa.WeekEnding
				and dm.DisciplineID = aa.DisciplineID 



	order by
		 dm.WeekEnding,
		DisciplineShort
	
		--bb.DisciplineID		-- RowNo is based on disciplineID (max hours)
			 
		






");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
