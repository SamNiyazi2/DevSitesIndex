using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Timelogtriggerstrg_Timelog_Validationtrg_Timelog_OneOpenRecordOnly : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"


 

if exists ( select 1 from sys.triggers where name = 'trg_Timelog_OneOpenRecordOnly')
	begin
		drop trigger [DemoSites].trg_Timelog_OneOpenRecordOnly 
	end

	go


-- 06/01/2019 04:01 pm - SSN - Verify that we don't have more than one open record (null totalSeconds) at a time.
-- c#

create TRIGGER [DemoSites].[trg_Timelog_OneOpenRecordOnly] 
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







go





 

if exists ( select 1 from sys.triggers where name = 'trg_Timelog_Validation')
	begin
		drop trigger [DemoSites].[trg_Timelog_Validation] 
	end

	go

-- 06/01/2019 05:08 pm - SSN - Validation
-- c#

create TRIGGER [DemoSites].[trg_Timelog_Validation] 
   ON  [DemoSites].[TimeLog]
   AFTER  insert,UPDATE
AS 
BEGIN

	SET NOCOUNT ON;
  


  ;
  with x as (

	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  , case when year ([StartTime] ) < year(getdate())-10 then 0 else 1 end ValidStartTime1
			  ,[TotalSeconds]
		
		from inserted
	)
	select * 
		into #inserted_for_Validation
			  FROM x
			  where x.ValidStartTime1 = 0 

	if @@ROWCOUNT > 0 

		begin

			declare @errorMessage varchar(max)

			set @errorMessage = ''

			select @errorMessage = case when ValidStartTime1 = 0 then 'Invalid start time' else '' end
				from #inserted_for_Validation


			declare @crlf char(2)
			set @crlf = char(13) +char(10)

			declare @feedbackMessage varchar(2048)
			set @feedbackMessage = @crlf  + '[ssn-sql-20190601-1804] Failed validation. '

					set @feedbackMessage = @feedbackMessage  + @crlf  + @errorMessage 


			;
			throw 50001, @feedbackMessage , 1
			rollback
		end

		
end











");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"
if exists ( select 1 from sys.triggers where name = 'trg_Timelog_OneOpenRecordOnly')
	begin
		drop trigger [DemoSites].trg_Timelog_OneOpenRecordOnly 
	end

	go





if exists ( select 1 from sys.triggers where name = 'trg_Timelog_Validation')
	begin
		drop trigger [DemoSites].[trg_Timelog_Validation] 
	end

	go





");


        }
    }
}
