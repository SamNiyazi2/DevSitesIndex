using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class CodeReferences_FullTextSearchaddtitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
            @"
-- 09/06/2018 08:14 pm - SSN
-- 02/24/2019 12:24 pm - ssn - Add Title (2)
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
		FROM DemoSites.CodeReferences
	    WHERE Contains( [CodeBlock], @searchterm)
		--WHERE FREETEXT (codeblock, @searchterm)
	
	-- 01/28/2019 05:32 pm - SSN - Added order
	order by DateModified desc, DateAdded desc	
"
                );

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
USE [Testing]
GO
/****** Object:  StoredProcedure [DemoSites].[CodeReferences_FullTextSearch]    Script Date: 2/24/2019 12:24:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- 09/06/2018 08:14 pm - SSN

ALTER proc [DemoSites].[CodeReferences_FullTextSearch]
(
    @searchterm nvarchar(1000)
)
AS

	SELECT top 50  [Id]
      ,[CodeBlock]
      ,[DateAdded]
      ,[DateModified]
      ,[SourceAddress]
		FROM DemoSites.CodeReferences
	    WHERE Contains( [CodeBlock], @searchterm)
		--WHERE FREETEXT (codeblock, @searchterm)
	
	-- 01/28/2019 05:32 pm - SSN - Added order
	order by DateModified desc, DateAdded desc	");
        }
    }
}
