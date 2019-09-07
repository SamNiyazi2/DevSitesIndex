using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Timelogtriggerandfsql_TableFromString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(
@"

if exists (select 1 from sys.objects
	where name = 'fsql_TableFromString')
begin
	drop FUNCTION fsql_TableFromString 
end

GO
-- 04/19/2019 11:18 am - SSN - Created (C#)
-- Source: https://blogs.msdn.microsoft.com/amitjet/2009/12/11/convert-comma-separated-string-to-table-4-different-approaches/

CREATE FUNCTION fsql_TableFromString 
(
	@str varchar(1000)
)
RETURNS 
@ReturnTable TABLE 
(
	RowColValue varchar(100)
)
AS
BEGIN

	Declare @x XML 

	select @x = cast('<A>'+ replace(@str,',','</A><A>')+ '</A>' as xml)

	insert into @ReturnTable
	select t.value('.', 'int') as RowColValue
		from @x.nodes('/A') as x(t) 
	return
END
GO



");




            migrationBuilder.Sql(
@"

if exists ( select 1 from sys.triggers aa
	inner join sys.tables bb
		on aa.parent_id = bb.object_id
	inner join sys.schemas cc
		on bb.schema_id = cc.schema_id 

	where cc.name = 'DemoSites'  and bb.name = 'timelog' and aa.name = 'trg_Timelog_ChangeNotAllowed' )

	begin
		drop TRIGGER [DemoSites].[trg_Timelog_ChangeNotAllowed]
	end
go

-- 04/19/2019 10:48 pm - SSN - Timelog - create triggers to prevent change  (C#)-v02

create TRIGGER trg_Timelog_ChangeNotAllowed 
   ON  demosites.timelog
   AFTER  UPDATE
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

	declare @count int
	declare @totalSecondsLessThanZeroCount int
	set @count = 0 
	set @totalSecondsLessThanZeroCount  = 0 

	select @count = count(*), @totalSecondsLessThanZeroCount = sum( case when dd.totalseconds is null then 0 else case when ii.totalseconds <0 then 1 else 0 end end ) from #inserted ii 
		join #deleted dd 
			on ii.TimeLogID = dd.TimeLogID
		where ( dd.startTime is not null and datediff ( n,  dd.startTime, ii.startTime ) <> 0 )
			or ( dd.TotalSeconds is not null and dd.TotalSeconds -  ii.TotalSeconds <> 0 )
			or ii.TotalSeconds < 0
			 
	if @count > 0 
		begin
			declare @crlf char(2)
			set @crlf = char(13) +char(10)

			declare @feedbackMessage varchar(2048)
			set @feedbackMessage = @crlf  + '[ssn-sql-20190419-2334] Changes are not allowed on StartTime or TotalSeconds. '
			if @totalSecondsLessThanZeroCount > 0 
				begin
					set @feedbackMessage = @feedbackMessage  + @crlf  + 'TotalSeconds cannot be less than zero.'
				end
					set @feedbackMessage = @feedbackMessage  + @crlf + 'Transaction aborted.'

			;
			throw 50001, @feedbackMessage , 1
			rollback
		end

end

");


        }








        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(
@"

if exists (select 1 from sys.objects
	where name = 'fsql_TableFromString')
begin
	drop FUNCTION fsql_TableFromString 
end

GO

");


        migrationBuilder.Sql(
@"


if exists ( select 1 from sys.triggers aa
	inner join sys.tables bb
		on aa.parent_id = bb.object_id
	inner join sys.schemas cc
		on bb.schema_id = cc.schema_id 

	where cc.name = 'DemoSites'  and bb.name = 'timelog' and aa.name = 'trg_Timelog_ChangeNotAllowed' )

	begin
		drop TRIGGER [DemoSites].[trg_Timelog_ChangeNotAllowed]
	end
go

");

        }


    }
}
