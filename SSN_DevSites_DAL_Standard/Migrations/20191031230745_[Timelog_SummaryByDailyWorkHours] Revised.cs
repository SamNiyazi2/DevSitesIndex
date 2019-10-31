using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Timelog_SummaryByDailyWorkHoursRevised : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"

 
-- 10/29/2019 11:32 am - SSN - [20191029-0747] - [007] - Timesheet dashboard - Daily work hour summary
-- 10/30/2019 08:41 am - SSN - (C#)
-- 10/31/2019 03:25 pm - SSN - (c#)

ALTER  proc [DemoSites].[Timelog_SummaryByDailyWorkHours]

as


declare @table_Source table ( DisciplineID int ,  StartTime datetime, StopTime dateTime ) 
declare @table_summary table ( DisciplineID int , WorkDate date, TotalSeconds float, TotalHours decimal(12,2)) 
 
;

with x1 as
(
	select DisciplineID, starttime StartTime , dateadd ( s , totalseconds, startTime )  StopTime  
	

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

),  x3 as
(
	select DisciplineID , datediff ( s , startTime, StopTime ) TotalSeconds,  StartTime 
		from x2
)
insert into @table_summary
	select DisciplineID , datefromparts ( datepart ( yyyy, StartTime ) ,  datepart ( m , StartTime ) ,  datepart ( d , StartTime) ), 
			TotalSeconds, (TotalSeconds / (60.0*60.0))
		from x3 

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






declare @table_DateMaster table ( WorkDate date ) 

declare @firstDate date

select @firstDate = MIN(workdate) from @table_summary

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
	select line2 + 1  from x 
	where x.line2 < (@maxrecursion)

)

, y as 

(
	select DATEADD ( day , line2, @firstDate ) WorkDate from x
)
insert into @table_DateMaster
	select * from y

option ( maxrecursion 32767)




;


with x3 as
(
	select
		DisciplineID,
		WorkDate ,
		sum (TotalHours) As TotalHours

	from @table_summary aa

	group by
		DisciplineID, 
		WorkDate

)

, x4 as

(
	select
		aa.DisciplineID,
		cc.Discipline, 
		WorkDate ,
		TotalHours 

	from @table_summary aa
		left join @table_disciplines bb
			on aa.DisciplineID = bb.DisciplineID 
		left join @table_disciplines cc
			on bb.FinalDisciplineID = cc.DisciplineID  

)

SELECT 
		ROW_NUMBER() over ( order by dm.WorkDate, bb.discipline) SeqNo,		
		bb.Discipline, 
		dm.WorkDate  ,	 
		TotalHours

	FROM @table_DateMaster dm
		
		cross join @table_disciplines bb 
		
		left join  x3 
			on x3.WorkDate = dm.WorkDate
				and x3.DisciplineID = bb.DisciplineID
		
		where bb.IsMaster = 1   

	order by
			 SeqNo 



 


");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
