using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddJobs_Index_WithLastActivityDatev02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

alter table demosites.job
    ADD [LastActivityDate]         AS (getdate()),
        [ProjectTitle_ForActivity] AS ('');

");



            migrationBuilder.Sql(@"
 -- 08/31/2019 06:46 pm - SSN - For job index (C# v2)

CREATE procedure DemoSites.Jobs_Index_WithLastActivityDate

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



	FROM DemoSites.job aa with (nolock)
		left join DemoSites.Project bb with (nolock)
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




            migrationBuilder.Sql(@"
DROP PROCEDURE [DemoSites].[Jobs_Index_WithLastActivityDate];

");




            migrationBuilder.Sql(@"
ALTER TABLE [DemoSites].[Job] DROP COLUMN [ProjectTitle_ForActivity], COLUMN [LastActivityDate];

");





        }
    }
}
