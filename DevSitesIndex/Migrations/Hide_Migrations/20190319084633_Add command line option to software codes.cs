using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Addcommandlineoptiontosoftwarecodes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
declare @softwareTitle varchar(100)
declare @softwareTitle_OnFile varchar(100)
declare @id_onFile int
declare @id int

set @id = 4
set @id_onFile = -1
set @softwareTitle_OnFile = 'xxxxx'

set @softwaretitle = 'Command'

select @id_onFile  = id , @softwareTitle_OnFile  = softwareTitle  from DemoSites.SoftwareCode where id  = @id 

print 'id [' + cast ( @id_onFile as varchar ) + ']'
print '[' + @softwareTitle_OnFile + ']'

if @id_onfile = @id
begin
	if @softwareTitle_OnFile != @softwareTitle
	begin
	
		declare @errorMessage varchar(1000)
		set @errorMessage = 'software code [' + cast ( @id as varchar ) + '] is already assigned the title [' + @softwareTitle_onFile +']'
		;
		 throw 50000 ,  @errorMessage ,0
	
	end

end
else
	begin
		set identity_insert DemoSites.SoftwareCode on
		insert into DemoSites.SoftwareCode ( id, softwaretitle) values ( @id , @softwareTitle  ) 
		set identity_insert DemoSites.SoftwareCode off

	end


");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
  delete from [DemoSites].[SoftwareCode] where id = 4
");

        }
    }
}
