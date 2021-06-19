using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Timelog_Update_WorkDetail_Less_LineItemupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {


            // 06/18/2021 11:41 pm - SSN - To remove 'Line Item' from TimeLog WorkDetail.
            // Application is manual.

            migrationBuilder.Sql(@"





-- 06/11/2021 05:58 pm - SSN - Replacing WorkDetail with the remaining part after extracting line item
-- 06/18/2021 07:34 pm - SSN - Testing for deployment
-- Renamed Timelog_Update_WorkDate_Less_LineItem Timelog_Update_WorkDetail_Less_LineItem
create or alter procedure [DemoSites].[Timelog_Update_WorkDetail_Less_LineItem]

@step int 

as


if @step is null 

	begin
	
		print ''
		print ''
		print '    Must provide step number'
		print ''
		print '1 - Verify a match betwork work file WrokDetail and demosites.TimeLog '
		print '    Returns mismatched records'
		print ''
		print '21 - To populate TimeLog WorkDetail with WorkDetailNew (Less lineitem) posint original entry and new enry to pre/post columns'
		print ''
		;
		throw 50001 , 'Must provide step number',1

	end


declare @sep varchar(1)

set @sep = char(10)

declare @topCount int
set @topcount  = 300000000 


-- @table1 = WorkDetailNew = WorkDetail less line item

declare @table1 table ( 
	workDetailOriginalLength int , 
	WorkDetailNewLength int , 
	TimeLogID int not null, 
	RowNo int, 
	RowNo2 int , 
	Weight int , 
	WorkDetail nvarchar(max), 
	LineItem nvarchar(200),
	LineCounter int , 
	WorkDetailNew nvarchar(max))

;


with x as (

    select top (@topCount)

                ROW_NUMBER() over(partition by timelogid order by weight) RowNo,   
				* , 
				len(workdetail) - len(replace (workdetail, char(10),'')) LineCounter


    from DemoSites.TimeLog aaa



                    outer apply(
                        select top (@topCount)
                                ROW_NUMBER() over (order by timelogid) RowNo2,
										* 
							from(
                                select ROW_NUMBER() over (order by timelogid) RowNo2_a,
										case when
                                            value like 'http:%' or value like 'https:%' then 2
											when trim(value) = '' then 2
											else 1
										end weight,
										* from(
                                        select value from string_split (aaa.workdetail, @sep)
                                            where trim (value) <> ''
					
												) q1 
										) q2

                                    order by Weight, RowNo2_a

								) q3

             where WorkDetail is not null

	order by TimeLogId, RowNo, RowNo2

) 
, y as (

    select
            timelogid, STRING_AGG (value, char(10)) WorkDetailNew
       from x
       where RowNo2 > 1
		group by timelogid
)

insert into @table1

	select

			len(DemoSites.fsql___stripNonAlphanumeric (workdetail ) )
			,
			 len(DemoSites.fsql___stripNonAlphanumeric (value + coalesce(workdetailnew,'') ) )
			,
				-- TimelogId, weight , WorkDetail, value
				x.TimeLogId, RowNo, RowNo2, Weight, WorkDetail, Value, LineCounter, WorkDetailNew

		from x
		left join y

			on x.TimeLogId = y.TimeLogId

	--  order by TimeLogId, RowNo , RowNo2
	where x.RowNo  = 1

			-- Testing
			--and
			
			--len (DemoSites.fsql___stripNonAlphanumeric(workdetail ) )
			--<> 			
			--len(DemoSites.fsql___stripNonAlphanumeric (value +  coalesce(workdetailnew,'') ) ) 


if @step = 1 
	begin
		
		declare @mismatchedRecordCount int

		select * from demosites.timelog aa
			left join @table1 bb
				on aa.timelogid = bb.TimeLogID
			where aa.WorkDetail <> bb.WorkDetail

		set @mismatchedRecordCount = @@rowcount 

		if @mismatchedRecordCount  > 0
			begin
				declare @errorMessage nvarchar(max)
				set @errorMessage = formatmessage ( 'Have [%d] mismtached records.', @mismatchedRecordCount ) 
				;
				throw 50001 , @errorMessage , 1
			end


	end

	
if @step = 21 
	begin



	
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;




		update DemoSites.TimeLog 
									set 
										WorkDetail_PreLineItem = DemoSites.TimeLog.WorkDetail, 
										WorkDetail_PostLineItem = WorkDetailNew 
										
			from  @table1 aa

			where aa.TimeLogId = demosites.timelog.timelogid

		update DemoSites.TimeLog 
									set 
										WorkDetail  = WorkDetailnew
										
			from  @table1 aa

			where aa.TimeLogId = demosites.timelog.timelogid



			
COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;



	end
		


-- 			exec [DemoSites].[Timelog_Update_WorkDetail_Less_LineItem] 1 
--			exec [DemoSites].[Timelog_Update_WorkDetail_Less_LineItem] 21 





");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
