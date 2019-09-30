﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Project_index_searchvarcharmax : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"


 

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)
-- 09/30/2019 07:39 am - SSN - @table description varchar(max)  (c#)

ALTER procedure [DemoSites].[Project_Index_Search]
(
	@searchterm nvarchar(1000),
	@tablesIncluded varchar(10),

	@recordsPerPage int = 20,
	@pageNo int = 1 ,
	@sortColumn varchar(128) = null ,
	@desc bit = 0

)
AS


declare @includeProjects bit
declare @includeJobs bit
declare @includeTimelog bit


set @includeProjects = case when CHARINDEX( '1' , @tablesIncluded ) > 0 then 1 else 0 end 
set @includeJobs = case when CHARINDEX( '2' , @tablesIncluded ) > 0 then 1 else 0 end 
set @includeTimelog = case when CHARINDEX( '3' , @tablesIncluded ) > 0 then 1 else 0 end 


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(max))

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			[ProjectTitle]
      
		FROM [DemoSites].[Projects] with (nolock)
	
		where @includeProjects = 1 and contains ( ProjectTitle , @searchTerm )  


	union all


	SELECT  
			2 as TableID,
			ProjectID,
			[JobID],
			null as TimelogId,
			coalesce  ( [DateUpdated], [DateAdded]),
			[JobTitle]
			--,
			--[Job_StatusID]

		FROM [DemoSites].[Jobs] with (nolock)
  
		where @includeJobs = 1 and  contains ( [JobTitle] , @searchTerm )  



	union all


	SELECT  

			3 as TableID,
			null as ProjcetId,
			[JobId],
			[TimeLogId],
			coalesce ( [DateModified], [DateAdded] ) ,
			[WorkDetail]
	--,
	--		[DisciplineID],

		FROM [DemoSites].[TimeLog] with (nolock)

		where @includeTimelog = 1 and  contains ( [WorkDetail] , @searchTerm )  


select 
	TableID,
	case TableID when 1 then 'Project' when 2 then 'Job' when 3 then 'Timelog' else 'Error-SourceTable' end SourceTable,
	ProjectId  , JobID  , TimelogID  , LastActivity , Description
		
from @table 

	 
	order by lastActivity desc	





-- 09/27/2019 10:04 am - SSN - Add stats results

declare @totalRecordCount int


select @totalRecordCount = count(*) FROM @table aa 

select	@recordsPerPage			as RecordsPerpage , 
		@pageNo					as CurrentPageNo , 
		@totalRecordCount		as TotalRecordCount, 
		@sortColumn				as ColumnName, 
		@desc					as [desc], 
		@tablesIncluded			as tablesIncluded
 


");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
