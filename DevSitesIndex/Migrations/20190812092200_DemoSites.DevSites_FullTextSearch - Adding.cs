using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{

    // 08/12/2019 04:23 am - SSN - [20190812-0345] - [003] - Apply fulltext search

    public partial class DemoSitesDevSites_FullTextSearchAdding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


if exists ( select * from sysobjects where name = 'DevSites_FullTextSearch' ) 
begin
	drop proc [DemoSites].[DevSites_FullTextSearch]
end

go

-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)

create proc [DemoSites].[DevSites_FullTextSearch]
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
      ,[ForDemo_v02]
  FROM [DemoSites].[DevSites]

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	
	 
	order by DateUpdated desc, DateAdded desc	


go

");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"


if exists ( select * from sysobjects where name = 'DevSites_FullTextSearch' ) 
begin
	drop proc [DemoSites].[DevSites_FullTextSearch]
end

go


");


        }
    }
}
