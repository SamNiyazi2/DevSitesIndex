using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Timelogs_Search : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)
-- 09/10/2019 05:33 pm - SSN - RowVersion

ALTER proc [DemoSites].[DevSites_FullTextSearch]
(
    @searchterm nvarchar(1000)
)
AS

	SELECT TOP (50) [Id]
      ,[SiteTitle]
      ,[SiteUrl]
      ,[SolutionName]
      ,[Solution_Details]
      ,[DateAdded]
      ,[SoftwareCodeID]
      ,[DateUpdated]
      ,[CanBeLaunched]
      ,[ForDemo_v02],
	  LastActivityDate,
	  RowVersion
  FROM [DemoSites].[DevSites]

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	
	 
	order by DateUpdated desc, DateAdded desc
GO
PRINT N'Creating [DemoSites].[PagingVariables_Set]...';


GO

-- 10/21/2019 11:33 pm - SSN

CREATE procedure demosites.PagingVariables_Set
(
	@recordsPerPage int output,
	@pageNo int output,
	@offset int output,
	@totalRecordCount  int

)
AS
BEGIN

	if @recordsPerPage is null set @recordsPerPage = 10 
	if @recordsPerPage <= 0 set @recordsPerPage = 10 

	if @pageNo is null set @pageNo = 1
	if @pageNo <= 0 set @pageNo = 1

	if ( @pageNo > (@totalRecordCount / @recordsPerPage) ) set @pageNo = ceiling ( @totalRecordCount * 1.0 / @recordsPerPage * 1.0 )

	set @offset = @recordsPerPage * ( @pageNo - 1 ) 

	if @offset is null set @offset = 0 
	if @offset < 0 set @offset = 0 

	
END
GO
PRINT N'Creating [DemoSites].[Timelogs_Search]...';


GO

 

-- 10/21/2019 05:23 am - SSN

CREATE procedure [DemoSites].[Timelogs_Search]
(
	@searchterm nvarchar(1000),
	@recordsPerPage int = 20,
	@pageNo int = 1 ,
	@sortColumn varchar(128) = null ,
	@desc bit = 0

)
AS


declare @searchTerm_local nvarchar(1000)

declare @doFullTextSearch bit = 1
declare @totalRecordCount int

if @searchTerm is null set @searchTerm = ''

if LEN ( @searchTerm ) = 0 
begin
	set @doFullTextSearch = 0
	set @searchTerm_local  = 'x'
end
else
begin
	set @searchTerm_local = @searchTerm
end


declare @table table ( PK int primary key) 
 

insert into @table 

	SELECT  
			TimeLogId

		FROM [DemoSites].[TimeLog] aa with (nolock)

		where   0 = @doFullTextSearch  or contains ( WorkDetail  , @searchTerm_local   )

select @totalRecordCount = @@ROWCOUNT
	 

	 
declare @offset int 

exec demosites.PagingVariables_Set
	@recordsPerPage output,
	@pageNo  output,
	@offset output,
	@totalRecordCount 




	SELECT  
			
			ee.ProjectTitle,
			dd.JobTitle,
			cc.DisciplineShort,

			dd.ProjectID,
			aa.JobId,
			TimeLogId,
			[WorkDetail],
			StartTime ,
			aa.TotalSeconds

		FROM @table zz
			inner join DemoSites.TimeLog aa with (nolock) 
				on zz.PK = aa.TimeLogId
						
			left join DemoSites.Disciplines cc with (nolock)
				on aa.DisciplineID = cc.DisciplineId

			left join DemoSites.Jobs dd with (nolock)
				on aa.JobId = dd.JobID

			left join DemoSites.Projects ee with (nolock)
				on ee.ProjectID = dd.ProjectID

		order by startTime desc	
		OFFSET (@offset) ROWS
		FETCH NEXT (@recordsPerPage) ROWS ONLY




select	@recordsPerPage			as RecordsPerpage , 
		@pageNo					as CurrentPageNo , 
		@totalRecordCount		as TotalRecordCount, 
		@sortColumn				as ColumnName, 
		@desc					as [desc],
		@searchterm				as searchterm
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
