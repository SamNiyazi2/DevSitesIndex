using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Updatetrg_Timelog_ChangeNotAllowed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.EnsureSchema(
            //    name: "DemoSites");

            //migrationBuilder.CreateTable(
            //    name: "CodeReferences",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        CodeBlock = table.Column<string>(nullable: false),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateModified = table.Column<DateTime>(nullable: false),
            //        SourceAddress = table.Column<string>(nullable: true),
            //        Title = table.Column<string>(maxLength: 100, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CodeReferences", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Company",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        CompanyID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        CompanyName = table.Column<string>(maxLength: 100, nullable: false),
            //        DateAdded = table.Column<DateTime>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Company", x => x.CompanyID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Discipline",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        DisciplineId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateModified = table.Column<DateTime>(nullable: true),
            //        DisciplineShort = table.Column<string>(maxLength: 100, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Discipline", x => x.DisciplineId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ReferenceSites",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        SiteTitle = table.Column<string>(nullable: false),
            //        SiteURL = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ReferenceSites", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "SoftwareCode",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        SoftwareTitle = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SoftwareCode", x => x.ID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Technologies",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        Description = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Technologies", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Project",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        ProjectID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        CompanyID = table.Column<int>(nullable: false),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateModified = table.Column<DateTime>(nullable: true),
            //        ProjectTitle = table.Column<string>(maxLength: 100, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Project", x => x.ProjectID);
            //        table.ForeignKey(
            //            name: "FK_Project_Company_CompanyID",
            //            column: x => x.CompanyID,
            //            principalSchema: "DemoSites",
            //            principalTable: "Company",
            //            principalColumn: "CompanyID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "DevSites",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        CanBeLaunched = table.Column<bool>(nullable: false),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateUpdated = table.Column<DateTime>(nullable: true),
            //        ForDemo_v02 = table.Column<byte>(nullable: false),
            //        SiteTitle = table.Column<string>(maxLength: 200, nullable: false),
            //        SiteUrl = table.Column<string>(maxLength: 500, nullable: true),
            //        SoftwareCodeID = table.Column<int>(nullable: false),
            //        SolutionName = table.Column<string>(maxLength: 500, nullable: false),
            //        Solution_Details = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_DevSites", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_DevSites_SoftwareCode_SoftwareCodeID",
            //            column: x => x.SoftwareCodeID,
            //            principalSchema: "DemoSites",
            //            principalTable: "SoftwareCode",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Job",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        JobID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateUpdated = table.Column<DateTime>(nullable: true),
            //        JobTitle = table.Column<string>(maxLength: 100, nullable: false),
            //        ProjectID = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Job", x => x.JobID);
            //        table.ForeignKey(
            //            name: "FK_Job_Project_ProjectID",
            //            column: x => x.ProjectID,
            //            principalSchema: "DemoSites",
            //            principalTable: "Project",
            //            principalColumn: "ProjectID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TimeLog",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        TimeLogId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DateAdded = table.Column<DateTime>(nullable: false),
            //        DateModified = table.Column<DateTime>(nullable: true),
            //        DisciplineID = table.Column<int>(nullable: false),
            //        JobId = table.Column<int>(nullable: false),
            //        StartTime = table.Column<DateTime>(nullable: false),
            //        TotalSeconds = table.Column<int>(nullable: true),
            //        WorkDetail = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TimeLog", x => x.TimeLogId);
            //        table.ForeignKey(
            //            name: "FK_TimeLog_Discipline_DisciplineID",
            //            column: x => x.DisciplineID,
            //            principalSchema: "DemoSites",
            //            principalTable: "Discipline",
            //            principalColumn: "DisciplineId",
            //            onDelete: ReferentialAction.Cascade);
            //        table.ForeignKey(
            //            name: "FK_TimeLog_Job_JobId",
            //            column: x => x.JobId,
            //            principalSchema: "DemoSites",
            //            principalTable: "Job",
            //            principalColumn: "JobID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_DevSites_SoftwareCodeID",
            //    schema: "DemoSites",
            //    table: "DevSites",
            //    column: "SoftwareCodeID");

            //migrationBuilder.CreateIndex(
            //    name: "Discipline_DisciplineShort_Unique",
            //    schema: "DemoSites",
            //    table: "Discipline",
            //    column: "DisciplineShort",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "Job_ProjectID_Title_Unique",
            //    schema: "DemoSites",
            //    table: "Job",
            //    columns: new[] { "ProjectID", "JobTitle" },
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_Project_CompanyID",
            //    schema: "DemoSites",
            //    table: "Project",
            //    column: "CompanyID");

            //migrationBuilder.CreateIndex(
            //    name: "ReferenceSites_SiteTitle",
            //    schema: "DemoSites",
            //    table: "ReferenceSites",
            //    column: "SiteTitle",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "ReferenceSites_SiteURL",
            //    schema: "DemoSites",
            //    table: "ReferenceSites",
            //    column: "SiteURL",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_TimeLog_DisciplineID",
            //    schema: "DemoSites",
            //    table: "TimeLog",
            //    column: "DisciplineID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TimeLog_JobId",
            //    schema: "DemoSites",
            //    table: "TimeLog",
            //    column: "JobId");


            // 05/01/2019 05:46 am - SSN - Allow for an override.

            migrationBuilder.Sql(
                @"

-- 04/19/2019 10:48 pm - SSN - Timelog - create triggers to prevent change  (C#)
-- 05/01/2019 05:24 am - SSN - Added override -999 (C#)

ALTER TRIGGER [DemoSites].[trg_Timelog_ChangeNotAllowed] 
   ON  [DemoSites].[TimeLog]
   AFTER  UPDATE
AS 
BEGIN

	SET NOCOUNT ON;
  
  
	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #inserted
		  FROM inserted

	select [TimeLogId]
			  ,[DateAdded]
			  ,[DateModified]
			  ,[StartTime]
			  ,[TotalSeconds]
      into #deleted
		  FROM deleted

	declare @count int
	declare @totalSecondsLessThanZeroCount int
	set @count = 0 
	set @totalSecondsLessThanZeroCount  = 0 

	select @count = count(*), @totalSecondsLessThanZeroCount = sum( case when dd.totalseconds is null then 0 else case when ii.totalseconds <0 then 1 else 0 end end ) from #inserted ii 
		join #deleted dd 
			on ii.TimeLogID = dd.TimeLogID
		where 
-- 05/01/2019 05:24 am - SSN - Added override -999
					( ii.TotalSeconds <> -999 )
					and
					(
								dd.startTime is not null and datediff ( n,  dd.startTime, ii.startTime ) <> 0 
							or dd.TotalSeconds is not null and dd.TotalSeconds -  ii.TotalSeconds <> 0
							or ii.TotalSeconds < 0 
					)			 
	if @count > 0 
		begin
			declare @crlf char(2)
			set @crlf = char(13) +char(10)

			declare @feedbackMessage varchar(2048)
			set @feedbackMessage = @crlf  + '[ssn-sql-20190419-2334] Changes are not allowed on StartTime or TotalSeconds. '
			if @totalSecondsLessThanZeroCount > 0 
				begin
					set @feedbackMessage = @feedbackMessage  + @crlf  + 'TotalSeconds cannot be less than zero.'
				end
					set @feedbackMessage = @feedbackMessage  + @crlf + 'Transaction aborted.'

			;
			throw 50001, @feedbackMessage , 1
			rollback
		end
-- 05/01/2019 05:24 am - SSN - Added override -999
		update bb
			set bb.totalseconds = null
			from timelog bb
				inner join inserted cc
				on bb.TimeLogId = cc.TimeLogId 

			where bb.totalseconds = -999
		
end



");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            //migrationBuilder.DropTable(
            //    name: "CodeReferences",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "DevSites",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "ReferenceSites",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "Technologies",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "TimeLog",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "SoftwareCode",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "Discipline",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "Job",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "Project",
            //    schema: "DemoSites");

            //migrationBuilder.DropTable(
            //    name: "Company",
            //    schema: "DemoSites");


        }
    }
}
