using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class JobsaddRowVersion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                schema: "DemoSites",
                table: "Jobs",
                rowVersion: true,
                nullable: true);



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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RowVersion",
                schema: "DemoSites",
                table: "Jobs");





            migrationBuilder.Sql(@"



 -- 08/31/2019 06:46 pm - SSN - For job index (C# v2)
 -- 09/01/2019 12:58 pm - SSN - Pluralized table names

ALTER procedure [DemoSites].[Jobs_Index_WithLastActivityDate]

as

SELECT     
		aa.JobID
		  ,aa.ProjectID
		  ,aa.DateAdded
		  ,aa.JobTitle
		  ,aa.DateUpdated
		 
		  
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
