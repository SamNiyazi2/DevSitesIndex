using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;


// 05/18/2019 04:54 pm - SSN - Added

namespace DevSitesIndex.Migrations
{
    public partial class AddDemoSitestrg_DevSites_ForDemo_v02_validate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


 
if exists ( select * from sys.triggers aa
	inner join sys.tables bb
		on aa.parent_id  = bb.object_id 

	inner join sys.schemas cc 
		on cc.schema_id = bb.schema_id 

		
 	where aa.name = 'trg_DevSites_ForDemo_v02_validate'
	  	and cc.name = 'DemoSites'
		)
		begin

			drop trigger DemoSites.trg_DevSites_ForDemo_v02_validate

		end

go


-- 05/18/2019 04:16 pm - SSN - Check ForDemo_v02  (C#)

create TRIGGER DemoSites.trg_DevSites_ForDemo_v02_validate
   ON [DemoSites].[DevSites]
   for INSERT, UPDATE
AS 

BEGIN


	SET NOCOUNT ON;


	if exists ( select 1 from inserted 
		where forDemo_v02 not in ( 1 , 2 , 3 ) )
		begin

		;
		throw 50000 , 'ssn-sql-20190518-1621 - Invalid forDemo_v02 value' , 1 

		end



END
GO

");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


 
if exists ( select * from sys.triggers aa
	inner join sys.tables bb
		on aa.parent_id  = bb.object_id 

	inner join sys.schemas cc 
		on cc.schema_id = bb.schema_id 

		
 	where aa.name = 'trg_DevSites_ForDemo_v02_validate'
	  	and cc.name = 'DemoSites'
		)
		begin

			drop trigger DemoSites.trg_DevSites_ForDemo_v02_validate

		end

go
");
        }
    }
}
