using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class UpdateSQLdemositesProject_Index_Search : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {


            // 04/11/2022 11:01 pm - SSN - Return projects' jobs.
            migrationBuilder.Sql(@"
USE [Testing_20220321_v01]
GO
/****** Object:  StoredProcedure [DemoSites].[Project_Index_Search]    Script Date: 4/11/2022 9:39:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Update RefreshRecord in ProjectAPI if structure changes

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)
-- 09/30/2019 07:39 am - SSN - @table description varchar(max)  (c#)
-- 11/15/2019 03:46 pm - SSN - Add Projcet and job titles (c#)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html
-- 11/22/2019 07:36 pm - SSN - Added TotalSeconds - Needed for link in html edit options.
-- 03/20/2022 04:10 pm - SSN - [20220320-1420] - [006] - 02 - Update code to use modified projects table - ProjectToalSeconds
-- 03/20/2022 05:26 pm - SSN - [20220320-1726] - [001] - 03 - Update jobs related objects to show total hours
-- 04/11/2022 10:55 pm - SSN - Return projects' jobs.


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


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(max), EntryTotalSeconds int)

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			null,
			ProjectTotalSeconds
			      
		FROM [DemoSites].[Projects] with (nolock)
	
		where @includeProjects = 1 and contains ( ProjectTitle , @searchTerm )  


	union all


	SELECT  
			2 as TableID,
			ProjectID,
			[JobID],
			null as TimelogId,
			coalesce  ( [DateUpdated], [DateAdded]),
			null,
			JobTotalSeconds


		FROM [DemoSites].[Jobs] with (nolock)
  
		where @includeJobs = 1 and  contains ( [JobTitle] , @searchTerm )  



	union all


	SELECT  

			3 as TableID,
			bb.ProjectID as ProjcetId,
			aa.[JobId],
			[TimeLogId],
			coalesce ( aa.[DateModified], aa.[DateAdded] ) ,
			[WorkDetail],
			TotalSeconds

		FROM [DemoSites].[TimeLog] aa with (nolock)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html

			left join DemoSites.Jobs bb with (nolock)
				on aa.JobId = bb.JobID

		where @includeTimelog = 1 and  contains ( [WorkDetail] , @searchTerm )  


select 
	TableID,
	coalesce ( bb.ProjectTitle, dd.ProjectTitle ) ProjectTitle,
	cc.JobTitle ,
	case TableID when 1 then 'Project' when 2 then 'Job' when 3 then 'Timelog' else 'Error-SourceTable' end SourceTable,
	aa.ProjectId  , aa.JobID  , TimelogID  , LastActivity , Description, EntryTotalSeconds
		
from @table aa
	left join DemoSites.Projects bb with (nolock)
		on aa.ProjectId = bb.ProjectID
	left join DemoSites.Jobs cc with (nolock)
		on aa.JobID = cc.JobID
	left join DemoSites.Projects dd with (nolock)
		on cc.ProjectID = dd.ProjectID

	 
	order by lastActivity desc	


-- 04/11/2022 09:40 pm - SSN - Return associated jobs
select jobs.* from DemoSites.Jobs with (nolock)
	inner join @table bb 
		on jobs.ProjectId = bb.ProjectId


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


            // 04/11/2022 11:01 pm - SSN - Return projects' jobs.
            migrationBuilder.Sql(@"
 
/****** Object:  StoredProcedure [DemoSites].[Project_Index_Search]    Script Date: 4/11/2022 9:39:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Update RefreshRecord in ProjectAPI if structure changes

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)
-- 09/30/2019 07:39 am - SSN - @table description varchar(max)  (c#)
-- 11/15/2019 03:46 pm - SSN - Add Projcet and job titles (c#)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html
-- 11/22/2019 07:36 pm - SSN - Added TotalSeconds - Needed for link in html edit options.
-- 03/20/2022 04:10 pm - SSN - [20220320-1420] - [006] - 02 - Update code to use modified projects table - ProjectToalSeconds
-- 03/20/2022 05:26 pm - SSN - [20220320-1726] - [001] - 03 - Update jobs related objects to show total hours



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


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(max), EntryTotalSeconds int)

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			null,
			ProjectTotalSeconds
			      
		FROM [DemoSites].[Projects] with (nolock)
	
		where @includeProjects = 1 and contains ( ProjectTitle , @searchTerm )  


	union all


	SELECT  
			2 as TableID,
			ProjectID,
			[JobID],
			null as TimelogId,
			coalesce  ( [DateUpdated], [DateAdded]),
			null,
			JobTotalSeconds


		FROM [DemoSites].[Jobs] with (nolock)
  
		where @includeJobs = 1 and  contains ( [JobTitle] , @searchTerm )  



	union all


	SELECT  

			3 as TableID,
			bb.ProjectID as ProjcetId,
			aa.[JobId],
			[TimeLogId],
			coalesce ( aa.[DateModified], aa.[DateAdded] ) ,
			[WorkDetail],
			TotalSeconds

		FROM [DemoSites].[TimeLog] aa with (nolock)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html

			left join DemoSites.Jobs bb with (nolock)
				on aa.JobId = bb.JobID

		where @includeTimelog = 1 and  contains ( [WorkDetail] , @searchTerm )  


select 
	TableID,
	coalesce ( bb.ProjectTitle, dd.ProjectTitle ) ProjectTitle,
	cc.JobTitle ,
	case TableID when 1 then 'Project' when 2 then 'Job' when 3 then 'Timelog' else 'Error-SourceTable' end SourceTable,
	aa.ProjectId  , aa.JobID  , TimelogID  , LastActivity , Description, EntryTotalSeconds
		
from @table aa
	left join DemoSites.Projects bb with (nolock)
		on aa.ProjectId = bb.ProjectID
	left join DemoSites.Jobs cc with (nolock)
		on aa.JobID = cc.JobID
	left join DemoSites.Projects dd with (nolock)
		on cc.ProjectID = dd.ProjectID

	 
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
    }
}
