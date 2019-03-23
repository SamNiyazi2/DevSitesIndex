using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class Addtitletostoredprocedureandrevisereturningsearchresults : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"

-- 09/06/2018 08:14 pm - SSN
-- 02/24/2019 12:24 pm - ssn - Add Title (2)
-- 03/22/2019 09:25 pm - SSN - Add title to fulltext search (2)

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
	    WHERE Contains( (CodeBlock,title), @searchterm)
		--WHERE FREETEXT (codeblock, @searchterm)
	
	-- 01/28/2019 05:32 pm - SSN - Added order
	order by DateModified desc, DateAdded desc	


");



            update_SoftwareCodeTable(migrationBuilder, 6, "Powershell");

        }






        private static void update_SoftwareCodeTable(MigrationBuilder migrationBuilder, int pk, string description)
        {

            migrationBuilder.Sql(@"
declare @softwareTitle varchar(100)
declare @softwareTitle_OnFile varchar(100)
declare @id_onFile int
declare @id int

set @id = " + pk + @"
set @id_onFile = -1
set @softwareTitle_OnFile = 'xxxxx'

set @softwaretitle = ' " + description + @"'

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
  delete from [DemoSites].[SoftwareCode] where id = 5
");

        }
    }
}
