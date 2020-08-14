using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class DemoSitesTimelog_ByDiscipline : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

// 10/29/2019 01:42 am - SSN - 

            migrationBuilder.Sql(@"

-- 10/28/2019 08:55 am - SSN - Timelog by discipline  
-- 10/29/2019 01:43 am - SSN - Migration (C#)

CREATE procedure DemoSites.TimeLog_ByDiscipline

as


select  min(aa.StartTime) FirstDate, DisciplineShort, cast ( SUM( TotalSeconds / 3600.0  ) as numeric(9,2))  TotalHours from demosites.timelog aa with (nolock)
	inner join DemoSites.Disciplines bb with (nolock)
		on aa.DisciplineID = bb.DisciplineId
		
	group by DisciplineShort
GO
PRINT N'Update complete.';

");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

-- 10/28/2019 08:55 am - SSN - Timelog by discipline  
-- 10/29/2019 01:43 am - SSN - Migration (C#)

CREATE procedure DemoSites.TimeLog_ByDiscipline

as


select  min(aa.StartTime) FirstDate, DisciplineShort, cast ( SUM( TotalSeconds / 3600.0  ) as numeric(9,2))  TotalHours from demosites.timelog aa with (nolock)
	inner join DemoSites.Disciplines bb with (nolock)
		on aa.DisciplineID = bb.DisciplineId
		
	group by DisciplineShort
GO
PRINT N'Update complete.';

");

        }
    }
}
