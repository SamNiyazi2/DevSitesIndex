using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class AddprocedureTimeLog_ByProject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
-- 10/29/2019 04:21 am - SSN - Timelog by project
-- 10/29/2019 05:47 am - SSN - Migration

create procedure [DemoSites].[TimeLog_ByProject]

as


select  min(aa.StartTime) FirstDate, ProjectTitle, 
		cast ( SUM( TotalSeconds / 3600.0  ) as numeric(9,2))  TotalHours 
	from demosites.timelog aa with (nolock)
	
		inner join DemoSites.Jobs bb with (nolock)
			on aa.JobId= bb.JobID
		inner join DemoSites.Projects cc with (nolock)
			on bb.ProjectID = cc.ProjectID 
		
	group by ProjectTitle


");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

if exists ( select 1 from sys.objects where name ='TimeLog_ByProject' )
begin
	print 'drop procedure'
	drop procedure [DemoSites].[TimeLog_ByProject]

end
 

");




        }
    }
}
