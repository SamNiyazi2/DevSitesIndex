using Microsoft.EntityFrameworkCore.Migrations;

// 03/21/2022 11:22 am - SSN - Adding total hours to projects and jobs, and anonymous access.

namespace DevSitesIndex.Migrations
{
    public partial class Addingtotalhoursandanonymousaccess : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"



 

alter TABLE [DemoSites].[jobs] drop column if exists [JobTotalSeconds]  




	go

-- ================================================
-- 03/20/2022 04:49 pm - SSN - [20220320-1420] - [007] - 02 - Update code to use modified projects table - ProjectToalSeconds
-- ================================================
CREATE or alter FUNCTION DemoSites.fsql_JobsTotalSeconds( @jobId int )
returns int
as
begin

	declare @totalSeconds int
 
	select  @totalSeconds = sum ( TotalSeconds ) 
		from demosites.TimeLog aa with (nolock)
 
		where JobId = @jobId
 
	return @totalSeconds 
end

go

select top 10 * from demosites.Jobs order by jobid desc 

select  DemoSites.fsql_JobsTotalseconds( 1 )



alter TABLE [DemoSites].[Jobs] add
 
	[JobTotalSeconds]  AS ([DemoSites].[fsql_JobsTotalSeconds]([JobId]))


go





















 

alter TABLE [DemoSites].[Projects] drop column if exists [ProjectTotalSeconds]  




	go

-- ================================================
-- 03/20/2022 02:01 pm - SSN - Return total hours for Projects table
-- ================================================
CREATE or alter FUNCTION DemoSites.fsql_TimeLogTotalSeconds( @projectId  int )
returns int
as
begin

	declare @totalSeconds int
 
	select  @totalSeconds = sum ( TotalSeconds ) 
		from demosites.TimeLog aa with (nolock)
			inner join demosites.Jobs with (nolock)
				on jobs.JobID = aa.JobId
 
		where Jobs.ProjectID = @projectId
 
	return @totalSeconds 
end

go

select top 10 * from demosites.projects order by ProjectID desc 

select  DemoSites.fsql_TimeLogTotalseconds( 1 )



alter TABLE [DemoSites].[Projects] add
 
	[ProjectTotalSeconds]  AS ([DemoSites].[fsql_TimeLogTotalSeconds]([projectId]))












go







 


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


go

 
 














 
GO
-- 08/31/2019 06:46 pm - SSN - For job index (C# v2)
-- 09/01/2019 12:58 pm - SSN - Pluralized table names
-- 09/06/2019 07:53 pm - SSN - Added RvowVersion
-- 09/16/2019 10:47 pm - SSN - Adding job_statuses
-- 09/17/2019 10:13 pm - SSN - padding in pageno and recordsPerPage and returning a new records set with table recordCount, the the values passed in.
-- 09/18/2019 02:46 am - SSN - Remove hard-coded test values (C#-v01)
-- 09/18/2019 03:06 am - SSN - Adding sort direction and appending column name and sort direction to second result set.
-- 09/22/2019 09:20 an - SSN - Add job_statuses_selected
-- 11/10/2019 09:27 am - SSN - Added @sortColumn as columnNameSelected (C#)
-- 11/27/2019 10:10 am - SSN - Adding projectId (c#)
-- 08/14/2020 09:06 am - SSN - Added fk_filter
-- 03/21/2022 11:02 am - SSN - Revise sortColumn validation - Add sortColumnAppliedInQuery

ALTER procedure [DemoSites].[Jobs_Index_WithLastActivityDate]


@recordsPerPage int,
@pageNo int,
@sortColumn varchar(100),
@desc bit,
@job_statuses_selected varchar(100),
@projectId int

as
 

declare @sortColumnAppliedInQuery varchar(100)
set @sortColumnAppliedInQuery = @sortColumn

declare @isValidColumn bit

declare @sql nvarchar(2000)

declare @sql_orderByClause nvarchar(500)
declare @inDescendingOrderClause nvarchar(6)

declare @job_statuses_selected_whereClause nvarchar(200)
set @job_statuses_selected_whereClause = ''

declare @projectId_whereClause nvarchar(200)
set @projectId_whereClause = ''


if @projectId is null set @projectId = 0 

declare @offset int

 

if @recordsPerPage is null set @recordsPerPage = 10 
if @recordsPerPage <= 0 set @recordsPerPage = 10 

if @pageNo is null set @pageNo = 1
if @pageNo <= 0 set @pageNo = 1

set @offset = @recordsPerPage * ( @pageNo - 1 ) 

if @offset is null set @offset = 0 
if @offset < 0 set @offset = 0 


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

 else 

	begin
	
	if @sortColumn is not null and @sortColumn not in ( 'activityage')
		begin

		if ( @sortColumn = 'JobTotalHours' ) 

			begin
				set @isValidColumn = 1
				set @sortColumnAppliedInQuery = 'JobTotalSeconds' 
			end

		else 
			begin
				declare @errorMessage varchar(max)
				set @errorMessage = formatmessage (  'Invalid sort column [%s]' ,  @sortColumn )
				;
				throw 50001 , @errorMessage , 1
			end

		end


	end



if @isValidColumn  = 1 
	-- set @sql_orderByClause = ' order by [' + @sortColumn  + '] '
	set @sql_orderByClause = ' order by [' + @sortColumnAppliedInQuery + '] '
	
else
	set @sql_orderByClause = ' order by lastActivityDate '



if @desc = 1 
	set @inDescendingOrderClause = ' desc '
else
	set @inDescendingOrderClause = ''



if @job_statuses_selected is not null 
	begin
		set @job_statuses_selected_whereClause = ' 
		
			job_statusid in (
			select RowColValue
			from dbo.fsql_TableFromString(''' + @job_statuses_selected + ''')  
			)
			 '
 
	end

if @projectId > 0 
	begin
		set @projectId_whereClause = ' bb.projectId = ' + convert ( varchar , @projectId ) + ' '
	end


declare @whereClause nvarchar(1000)
set @whereClause = ''

if @job_statuses_selected_whereClause != '' or @projectId_whereClause != ''
	begin
		set @whereClause = ' where ' 

		if @job_statuses_selected_whereClause != ''
			set @whereClause = @whereClause + ' ' + @job_statuses_selected_whereClause 


		if @projectId_whereClause != ''
			begin
				if @job_statuses_selected_whereClause != ''
					begin
						set @whereClause = @whereClause + ' and ' 
					end

					set @whereClause = @whereClause + ' ' + @projectId_whereClause
			end

	end


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
		
		-- 03/20/2022 07:13 pm - SSN - [20220320-1726] - [011] - 03 - Update jobs related objects to show total hours
		,JobTotalSeconds


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


--@job_statuses_selected_whereClause
@whereClause

+  ' ' + 

@sql_orderByClause + ' ' + @inDescendingOrderClause 

+ ' 

	  OFFSET (@offset) ROWS
		FETCH next ( @recordsPerPage ) ROWS ONLY                     
 
)

select * from x

'
 
 
exec sp_executesql @sql , N'@offset int, @recordsPerPage int', @offset, @recordsPerPage

declare @totalRecordCount int


set @sql = '
select @totalRecordCount = count(*) FROM DemoSites.jobs bb with (nolock)
' + @whereClause --  @job_statuses_selected_whereClause


exec sp_executesql @sql , N' @totalRecordCount int output ',  @totalRecordCount output 

-- 11/10/2019 09:27 am - SSN - Added @sortColumn as columnNameSelected  
-- 08/14/2020 09:06 am - SSN - Added fk_filter

select @recordsPerPage RecordsPerpage , @pageNo CurrentPageNo , @totalRecordCount TotalRecordCount, @sortColumn ColumnName, @desc [desc], @job_statuses_selected as job_statuses_selected, @sortColumn as columnNameSelected , @projectId as fk_filter


go

exec [DemoSites].[Jobs_Index_WithLastActivityDate] 

@recordsPerPage = 50 ,
@pageNo = 1,
@sortColumn = 'JobTotalHours',
@desc = 1 ,
@job_statuses_selected = null ,
@projectId = null 



go


















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


GO
























");
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


 



-- Update RefreshRecord in ProjectAPI if structure changes

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)
-- 09/30/2019 07:39 am - SSN - @table description varchar(max)  (c#)
-- 11/15/2019 03:46 pm - SSN - Add Projcet and job titles (c#)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html
-- 11/22/2019 07:36 pm - SSN - Added TotalSeconds - Needed for link in html edit options.


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


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(max), totalSeconds int)

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			null,
			null
			      
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
			null


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
	aa.ProjectId  , aa.JobID  , TimelogID  , LastActivity , Description, totalSeconds
		
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
 



GO









go




alter TABLE [DemoSites].[Projects] drop column if exists [ProjectTotalSeconds]  




	go


drop FUNCTION if exists DemoSites.fsql_TimeLogTotalSeconds 



go






alter TABLE [DemoSites].[jobs] drop column if exists [JobTotalSeconds]  




	go

drop function if exists  FUNCTION DemoSites.fsql_JobsTotalSeconds


go


























-- 08/31/2019 06:46 pm - SSN - For job index (C# v2)
-- 09/01/2019 12:58 pm - SSN - Pluralized table names
-- 09/06/2019 07:53 pm - SSN - Added RvowVersion
-- 09/16/2019 10:47 pm - SSN - Adding job_statuses
-- 09/17/2019 10:13 pm - SSN - padding in pageno and recordsPerPage and returning a new records set with table recordCount, the the values passed in.
-- 09/18/2019 02:46 am - SSN - Remove hard-coded test values (C#-v01)
-- 09/18/2019 03:06 am - SSN - Adding sort direction and appending column name and sort direction to second result set.
-- 09/22/2019 09:20 an - SSN - Add job_statuses_selected
-- 11/10/2019 09:27 am - SSN - Added @sortColumn as columnNameSelected (C#)
-- 11/27/2019 10:10 am - SSN - Adding projectId (c#)
-- 08/14/2020 09:06 am - SSN - Added fk_filter


ALTER procedure [DemoSites].[Jobs_Index_WithLastActivityDate]


@recordsPerPage int,
@pageNo int,
@sortColumn varchar(100),
@desc bit,
@job_statuses_selected varchar(100),
@projectId int

as



declare @isValidColumn bit

declare @sql nvarchar(2000)

declare @sql_orderByClause nvarchar(500)
declare @inDescendingOrderClause nvarchar(6)

declare @job_statuses_selected_whereClause nvarchar(200)
set @job_statuses_selected_whereClause = ''

declare @projectId_whereClause nvarchar(200)
set @projectId_whereClause = ''


if @projectId is null set @projectId = 0 

declare @offset int

 

if @recordsPerPage is null set @recordsPerPage = 10 
if @recordsPerPage <= 0 set @recordsPerPage = 10 

if @pageNo is null set @pageNo = 1
if @pageNo <= 0 set @pageNo = 1

set @offset = @recordsPerPage * ( @pageNo - 1 ) 

if @offset is null set @offset = 0 
if @offset < 0 set @offset = 0 


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



if @job_statuses_selected is not null 
	begin
		set @job_statuses_selected_whereClause = ' 
		
			job_statusid in (
			select RowColValue
			from dbo.fsql_TableFromString(''' + @job_statuses_selected + ''')  
			)
			 '
 
	end

if @projectId > 0 
	begin
		set @projectId_whereClause = ' bb.projectId = ' + convert ( varchar , @projectId ) + ' '
	end


declare @whereClause nvarchar(1000)
set @whereClause = ''

if @job_statuses_selected_whereClause != '' or @projectId_whereClause != ''
	begin
		set @whereClause = ' where ' 

		if @job_statuses_selected_whereClause != ''
			set @whereClause = @whereClause + ' ' + @job_statuses_selected_whereClause 


		if @projectId_whereClause != ''
			begin
				if @job_statuses_selected_whereClause != ''
					begin
						set @whereClause = @whereClause + ' and ' 
					end

					set @whereClause = @whereClause + ' ' + @projectId_whereClause
			end

	end


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


--@job_statuses_selected_whereClause
@whereClause

+  ' ' + 

@sql_orderByClause + ' ' + @inDescendingOrderClause 

+ ' 

	  OFFSET (@offset) ROWS
		FETCH next ( @recordsPerPage ) ROWS ONLY                     
 
)

select * from x

'
  
 
exec sp_executesql @sql , N'@offset int, @recordsPerPage int', @offset, @recordsPerPage

declare @totalRecordCount int


set @sql = '
select @totalRecordCount = count(*) FROM DemoSites.jobs bb with (nolock)
' + @whereClause --  @job_statuses_selected_whereClause


exec sp_executesql @sql , N' @totalRecordCount int output ',  @totalRecordCount output 

-- 11/10/2019 09:27 am - SSN - Added @sortColumn as columnNameSelected  
-- 08/14/2020 09:06 am - SSN - Added fk_filter

select @recordsPerPage RecordsPerpage , @pageNo CurrentPageNo , @totalRecordCount TotalRecordCount, @sortColumn ColumnName, @desc [desc], @job_statuses_selected as job_statuses_selected, @sortColumn as columnNameSelected , @projectId as fk_filter
GO

























-- Update RefreshRecord in ProjectAPI if structure changes

-- 09/26/2019 01:13 pm - SSN - [20190926-1242] - [004] - Search projects-- Create procedure
-- 09/27/2019 10:04 am - SSN - Add stats results (c#)
-- 09/30/2019 07:39 am - SSN - @table description varchar(max)  (c#)
-- 11/15/2019 03:46 pm - SSN - Add Projcet and job titles (c#)
-- 11/22/2019 07:08 pm - SSN - We need projectID for tr_1_id for html
-- 11/22/2019 07:36 pm - SSN - Added TotalSeconds - Needed for link in html edit options.


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


declare @table table ( TableID int, ProjectId int , JobID int, TimelogID int, LastActivity DateTime,Description varchar(max), totalSeconds int)

insert into @table 

	SELECT  
			1 as TableID,
			[ProjectID],
			null JobId,
			null TimelogId,
			coalesce ( [DateModified],[DateAdded]) LastActivity,
			null,
			null
			      
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
			null


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
	aa.ProjectId  , aa.JobID  , TimelogID  , LastActivity , Description, totalSeconds
		
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
 



GO






");

        }
    }
}
