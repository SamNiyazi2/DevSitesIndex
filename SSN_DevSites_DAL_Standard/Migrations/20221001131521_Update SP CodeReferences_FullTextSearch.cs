using Microsoft.EntityFrameworkCore.Migrations;

// 10/01/2022 08:15 am - SSN - Update sp CodeReferences_FullTextSearch - 

namespace DevSitesIndex.Migrations
{
    public partial class UpdateSPCodeReferences_FullTextSearch : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@" 

-- 09/06/2018 08:14 pm - SSN
-- 02/24/2019 12:24 pm - ssn - Add Title (2)
-- 03/22/2019 09:25 pm - SSN - Add title to fulltext search (2)
-- 05/01/2019 06:43 pm - SSN - Revise query
-- 08/17/2020 10:34 pm - SSN - with (nolock)
-- 04/17/2022 06:14 am - SSN - Add RowVersion 
-- 10/01/2022 08:07 am - SSN - Add fsql_CleanseFullTextSearchString (C#)

create or ALTER proc [DemoSites].[CodeReferences_FullTextSearch]
(
    @searchterm nvarchar(1000)
)
AS
 
if @searchterm  is null set @searchterm  = ''

select @searchterm  =  DemoSites.fsql_CleanseFullTextSearchString ( @searchTerm) 

	SELECT top 50  [Id],
		Title
      ,[CodeBlock]
      ,[DateAdded]
      ,[DateModified]
      ,[SourceAddress]
	  ,[RowVersion]
		FROM DemoSites.CodeReferences with (nolock)
	    WHERE 
	-- 05/01/2019 06:43 pm - SSN - Revise query
			Contains( (CodeBlock), @searchterm)
			or
			Contains( (title), @searchterm)
	
	
	-- 01/28/2019 05:32 pm - SSN - Added order
	order by DateModified desc, DateAdded desc

");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@" 
-- 09/06/2018 08:14 pm - SSN
-- 02/24/2019 12:24 pm - ssn - Add Title (2)
-- 03/22/2019 09:25 pm - SSN - Add title to fulltext search (2)
-- 05/01/2019 06:43 pm - SSN - Revise query
-- 08/17/2020 10:34 pm - SSN - with (nolock)
-- 04/17/2022 06:14 am - SSN - Add RowVersion 

ALTER proc [DemoSites].[CodeReferences_FullTextSearch]
(
    @searchterm nvarchar(1000)
)
AS
 

	SELECT top 50  [Id],
		Title
      ,[CodeBlock]
      ,[DateAdded]
      ,[DateModified]
      ,[SourceAddress]
	  ,[RowVersion]
		FROM DemoSites.CodeReferences with (nolock)
	    WHERE 
	-- 05/01/2019 06:43 pm - SSN - Revise query
			Contains( (CodeBlock), @searchterm)
			or
			Contains( (title), @searchterm)
	
	
	-- 01/28/2019 05:32 pm - SSN - Added order
	order by DateModified desc, DateAdded desc

");

        }
    }
}
