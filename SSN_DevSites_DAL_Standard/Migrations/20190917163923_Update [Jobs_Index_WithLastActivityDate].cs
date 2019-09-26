using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class UpdateJobs_Index_WithLastActivityDate_2 : Migration
    {

        // 09/17/2019 11:40 am - SSN - [20190917-0929] - [005] - Adding paging for angular lists

        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"


-- 08/31/2019 06:46 pm - SSN - For job index (C# v2)
-- 09/01/2019 12:58 pm - SSN - Pluralized table names
-- 09/06/2019 07:53 pm - SSN - Added RvowVersion
-- 09/16/2019 10:47 pm - SSN - Adding job_statuses
-- 09/17/2019 10:13 pm - SSN - padding in pageno and recordsPerPage and returning a new records set with table recordCount, the the values passed in.
-- 09/18/2019 02:46 am - SSN - Remove hard-coded test values (C#-v01)
-- 09/18/2019 03:06 am - SSN - Adding sort direction and appending column name and sort direction to second result set.

ALTER procedure [DemoSites].[Jobs_Index_WithLastActivityDate]


@recordsPerPage int,
@pageNo int,
@sortColumn varchar(100),
@desc bit

as



declare @isValidColumn bit

declare @sql nvarchar(2000)

declare @sql_orderByClause nvarchar(500)
declare @inDescendingOrderClause nvarchar(6)

declare @offset int

set @offset = @recordsPerPage * ( @pageNo - 1 ) 

if exists ( select cc.name , aa.name,aa.schema_id, bb.name
		
 from sys.tables aa 
	inner join sys.columns bb
		on aa.object_id = bb.object_id
	inner join sys.schemas cc
		on aa.schema_id = cc.schema_id

 where cc.name = 'demosites' and aa.name = 'jobs' and  bb.name = @sortColumn 

 )
 begin
 
	set @isValidColumn  = 1
 end


if @isValidColumn  = 1 
	set @sql_orderByClause = ' order by [' + @sortColumn  + '] '
else
	set @sql_orderByClause = ' order by lastActivityDate '



if @desc = 1 
	set @inDescendingOrderClause = ' desc '
else
	set @inDescendingOrderClause = ''



set @sql = '

with x as
(
	SELECT  
		aa.JobID
		  ,aa.ProjectID
		  ,aa.DateAdded
		  ,aa.JobTitle
		  ,aa.DateUpdated
		  ,aa.RowVersion
		 
		  
		,
		case 
			when LastStartTime is not null then LastStartTime 
			when DateUpdated is not null then DateUpdated 
			else aa.DateAdded
		end
		LastActivityDate
		 
		,bb.ProjectTitle as ProjectTitle_ForActivity
		,job_statusID
		,Status


	FROM DemoSites.jobs aa with (nolock)
		left join DemoSites.Projects bb with (nolock)
			on aa.ProjectID = bb.ProjectID
		left join demosites.job_statuses cc with (nolock)
			on cc.id = aa.Job_StatusID

		outer apply
		( 
			select JobId, max(StartTime) LastStartTime from DemoSites.TimeLog  bb with (nolock)
				where bb.jobid = aa.JobId
				group by JobId
			
		) q1
		 
' +

@sql_orderByClause + ' ' + @inDescendingOrderClause 

+ ' 

	  OFFSET (@offset) ROWS
		FETCH next ( @recordsPerPage ) ROWS ONLY                     
 
)

select * from x

'

exec sp_executesql @sql , N'@offset int, @recordsPerPage int', @offset, @recordsPerPage

declare @totalRecordCount int

select @totalRecordCount = count(*) FROM DemoSites.jobs aa with (nolock)


select @recordsPerPage RecordsPerpage , @pageNo CurrentPageNo , @totalRecordCount TotalRecordCount, @sortColumn ColumnName, @desc [desc]
 


");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {


            migrationBuilder.Sql(@"





 -- 08/31/2019 06:46 pm - SSN - For job index (C# v2)
 -- 09/01/2019 12:58 pm - SSN - Pluralized table names
 -- 09/06/2019 07:53 pm - SSN - Added RowVersion (C#)

ALTER procedure [DemoSites].[Jobs_Index_WithLastActivityDate]

as

SELECT     
		aa.JobID
		  ,aa.ProjectID
		  ,aa.DateAdded
		  ,aa.JobTitle
		  ,aa.DateUpdated
		  ,aa.RowVersion
		 
		  
		,
		case 
			when LastStartTime is not null then LastStartTime 
			when DateUpdated is not null then DateUpdated 
			else aa.DateAdded
		end
		LastActivityDate
		 
		,bb.ProjectTitle as ProjectTitle_ForActivity



	FROM DemoSites.jobs aa with (nolock)
		left join DemoSites.Projects bb with (nolock)
			on aa.ProjectID = bb.ProjectID
	
		outer apply
		( 
			select JobId, max(StartTime) LastStartTime from DemoSites.TimeLog  bb with (nolock)
				where bb.jobid = aa.JobId
				group by JobId
			
		) q1
		 
      order by aa.JobID

");

        }
    }
}
