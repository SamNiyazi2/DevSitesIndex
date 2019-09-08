using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class trg_Timelog_ChangeNotAllowedrevised : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"

-- 04/19/2019 10:48 pm - SSN - Timelog - create triggers to prevent change  (C#)
-- 05/01/2019 05:24 am - SSN - Added override -999 (C#)
-- 05/04/2019 08:04 pm - SSN - or ii.TotalSeconds is null  (C#)

ALTER TRIGGER [DemoSites].[trg_Timelog_ChangeNotAllowed] 
   ON  [DemoSites].[TimeLog]
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
		where 
-- 05/01/2019 05:24 am - SSN - Added override -999
-- 05/04/2019 08:04 pm - SSN - or ii.TotalSeconds is null 
					( ii.TotalSeconds <> -999 or ii.TotalSeconds is null )
				 
					and
					(
								dd.startTime is not null and datediff ( n,  dd.startTime, ii.startTime ) <> 0 
							or dd.TotalSeconds is not null and dd.TotalSeconds -  ii.TotalSeconds <> 0
							or ii.TotalSeconds < 0 
					)			 
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
-- 05/01/2019 05:24 am - SSN - Added override -999
		update bb
			set bb.totalseconds = null
			from timelog bb
				inner join inserted cc
				on bb.TimeLogId = cc.TimeLogId 

			where bb.totalseconds = -999
		
end





");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
