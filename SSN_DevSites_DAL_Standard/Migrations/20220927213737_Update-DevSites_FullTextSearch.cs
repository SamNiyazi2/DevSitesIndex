using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    // 09/27/2022 04:38 pm - SSN - Adding paging to DemoSites 
    public partial class UpdateDevSites_FullTextSearch : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"
-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)
-- 09/10/2019 05:33 pm - SSN - RowVersion
-- 06/14/2021 05:45 am - SSN - Return key on.  We have to 'include' technologies in the query.  We are doing it in code.
-- 09/27/2022 12:48 pm - SSN - Add recordsPerPage and currentPage (c#)

create or ALTER proc [DemoSites].[DevSites_FullTextSearch]
(
    @searchterm nvarchar(1000),
	@recordsPerPage int,
	@currentPage int
)
AS


if @searchTerm is null set @searchTerm = ''


declare @totalRecordCount int
declare @offset int 


declare @table table (id int primary key)

;
with x as (

	SELECT  [Id]  
		FROM [DemoSites].[DevSites] with (nolock)

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	 

)
insert into @table
	select id from x

select @totalRecordCount = @@ROWCOUNT


exec demosites.PagingVariables_Set
	@recordsPerPage output,
	@currentPage  output,
	@offset output,
	@totalRecordCount 



	SELECT aa.[Id]
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
  FROM [DemoSites].[DevSites] aa with (nolock) 
	inner join @table bb on aa.id = bb.id
	 
	order by DateUpdated desc, DateAdded desc
	 
		OFFSET (@offset) ROWS
		FETCH NEXT (@recordsPerPage) ROWS ONLY


select 	@recordsPerPage  RecordsPerPage  , 
		@currentPage   CurrentPageNo   , 
		@totalRecordCount TotalRecordCount ,
		@searchTerm SearchTerm


");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"
 
-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)
-- 09/10/2019 05:33 pm - SSN - RowVersion
-- 06/14/2021 05:45 am - SSN - Return key on.  We have to 'include' technologies in the query.  We are doing it in code.

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
  FROM [DemoSites].[DevSites] with (nolock)

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	
	 
	order by DateUpdated desc, DateAdded desc

");

        }
    }
}
