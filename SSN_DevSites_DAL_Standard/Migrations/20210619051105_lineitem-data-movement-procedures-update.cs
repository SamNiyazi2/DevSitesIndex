using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class lineitemdatamovementproceduresupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            // 06/19/2021 12:11 am - SSN - Minor

            migrationBuilder.Sql(@"

 

GO
PRINT N'Dropping [DemoSites].[Timelog_Update_WorkDate_Less_LineItem]...';


GO
DROP PROCEDURE [DemoSites].[Timelog_Update_WorkDate_Less_LineItem];


GO
PRINT N'Altering [DemoSites].[Timelog_MoveLineItems]...';


GO
-- 06/18/2021 05:48 am - SSN - Moving data

ALTER procedure[DemoSites].[Timelog_MoveLineItems]

        @step int

as


if @step is null 
	begin

        print ' '

        print ' '
		print 'Must provide step number'
		print ' '
		print '11 - List lineitem longer that 200 characters'
		print '1  - Inserting records into  [DemoSites].[Job_Lineitems]'
		print '2  - Update TimeLog LineItemID'
		print ' '
		print ' '
		;
		throw 50001, 'Must provide step number', 16;
	end


declare @table table(TimelogId int, RowNo int, weight int , WorkDetail varchar(max), value varchar(max), index1 int , index2 int )

insert into @table exec[DemoSites].[Timelog_Extract_LineItem]

declare @table2 table(timelogid int not null , jobid int not null , LineItem varchar(max) not null )
declare @table3 table(jobid int not null , LineItem varchar(200)not null , DateAdded datetime not null )
;
with x as (

    select
        aa.TimeLogId,   
		jobid  ,
		case when replace(ltrim(rtrim (coalesce (value,''))),char (13),'') = '' then 'Not defined' else value end  LineItem

from @table aa

        left join DemoSites.TimeLog bb

            on aa.TimelogId = bb.TimeLogId

        where rowno = 1

)
insert into @table2

    select* from x

;



--if @step = 11
--	begin
--			update demosites.timelog		
--				set WorkDetail = bb.WorkDetail 
--			from (
--             select aa.timelogid, WorkDetail from @table2 aa
--			 inner join [Testing_DB_Download_20210611_v04].[DemoSites].[TimeLog] bb
--				on aa.timelogid = bb.TimeLogId
--				where len ( aa.lineitem) > 200
--			) as bb 
--			where demosites.timelog.timelogid = bb.timelogid
--  end



;
with y as 
(
    select aa.jobid, LineItem , min(DateAdded) DateAdded
        from @table2 aa

            left join demosites.timelog bb

                on aa.timelogid = bb.timelogid

        group by aa.jobid , LineItem
)
insert into @table3

    select* from y		




if @step = 1 
	begin
        insert into[DemoSites].[Job_Lineitems]
        (JobId, LineItem, dateadded)

            select* from @table3
   end


    select count(*) from @table2  aa

if @step = 2
	begin
        update demosites.TimeLog
            set lineitemid = bb.lineitemid
            from(
                    select timelogid, lineitemid from @table2 aa

                        left join [DemoSites].[Job_Lineitems] bb
                            on aa.jobid = bb.JobId

                                and aa.LineItem       = bb.LineItem
            ) bb

            where demosites.TimeLog.TimeLogId = bb.timelogid



    end


    select aa.jobid, aa.lineitem , count(*) from @table2 aa

        left join  @table3 bb

            on aa.jobid = bb.jobid

                and aa.lineitem = bb.lineitem

        group by aa.jobid, aa.lineitem
        having count(*) > 1
GO
PRINT N'Update complete.';


GO

");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
