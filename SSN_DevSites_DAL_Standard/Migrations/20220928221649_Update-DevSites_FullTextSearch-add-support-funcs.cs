using Microsoft.EntityFrameworkCore.Migrations;

// 09/28/022 05:17 pm - SSN - Revise [DevSites_FullTextSearch] and add suppot functions

namespace DevSitesIndex.Migrations
{
    public partial class UpdateDevSites_FullTextSearchaddsupportfuncs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"




 
-- 09/28/2022 04:58 pm - SSN - Created to handle replacing multiple instances of a value

create or alter function DemoSites.fsql_replace
(
	@string nvarchar(Max),
	@valueToLookup nvarchar(100),
	@replacementValue nvarchar(100)
)

returns nvarchar(Max)
as
begin

	declare @returnValue nvarchar(max)

	declare @safetyCountr int = 0 
	select @returnValue = @string
	
	while ( charindex( @valueToLookup , @returnValue ) > 0 and @safetyCountr  < 100) 
	begin
		set @safetyCountr = @safetyCountr + 1
		SELECT  @returnValue = replace( @returnValue  , @valueToLookup , @replacementValue )
	end

	return @returnValue 

end

go
 




-- 09/28/2022 04:20 pm - SSN - Cleanse fulltext search string

create or alter function DemoSites.fsql_CleanseFullTextSearchString 
(
	@searchTerm nvarchar(1000)
)
returns nvarchar(1000)
as

begin

	declare @searchTerm_checked nvarchar(1000)

	declare @searchTerm_words table ( TheWord nvarchar(100) )

	;
	with x as ( 
		select * from string_split (@searchterm, ' ')
	)
	insert into @searchTerm_words 
		select trim(value)  from x 
			where trim(value) <> ''


	SELECT  @searchTerm_checked = STRING_AGG ( TheWord  , ' and ')  FROM @searchTerm_words
	 

	SELECT  @searchTerm_checked = DemoSites.fsql_Replace( @searchTerm_checked , '  ', ' ')
	SELECT  @searchTerm_checked = DemoSites.fsql_Replace( @searchTerm_checked , ' OR and ', ' or ')
	SELECT  @searchTerm_checked = DemoSites.fsql_Replace( @searchTerm_checked , ' and OR ', ' or ')
	SELECT  @searchTerm_checked = DemoSites.fsql_Replace( @searchTerm_checked , ' or or ', ' or ')
	SELECT  @searchTerm_checked = DemoSites.fsql_Replace( @searchTerm_checked , ' and and ', ' and ')
	
	return @searchterm_checked 

end

go


-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)
-- 09/10/2019 05:33 pm - SSN - RowVersion
-- 06/14/2021 05:45 am - SSN - Return key on.  We have to 'include' technologies in the query.  We are doing it in code.
-- 09/27/2022 12:48 pm - SSN - Add recordsPerPage and currentPage (c#)
-- 09/28/2022 03:04 pm - SSN - Check searchTerm syntac for fulltext search (c#-EF)

create or ALTER   proc [DemoSites].[DevSites_FullTextSearch]
(
    @searchterm nvarchar(1000),
	@recordsPerPage int,
	@currentPage int
)
AS


if @searchTerm is null set @searchTerm = ''
 
select @searchterm  =  DemoSites.fsql_CleanseFullTextSearchString ( @searchTerm) 



declare @totalRecordCount int
declare @offset int 


declare @table table (id int primary key)

;
with x as (

	SELECT  [Id]  
		FROM [DemoSites].[DevSites] with (nolock)

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	 

)
insert into @table
	select id from x

select @totalRecordCount = @@ROWCOUNT


exec demosites.PagingVariables_Set
	@recordsPerPage output,
	@currentPage  output,
	@offset output,
	@totalRecordCount 



	SELECT aa.[Id]
      ,[SiteTitle]  
      ,[SiteUrl]
      ,[SolutionName]
      ,[Solution_Details]
      ,[DateAdded]
      ,[SoftwareCodeID]
      ,[DateUpdated]
      ,[CanBeLaunched]
      ,[ForDemo_v02],
	  LastActivityDate,
	  RowVersion
  FROM [DemoSites].[DevSites] aa with (nolock) 
	inner join @table bb on aa.id = bb.id
	 
	order by DateUpdated desc, DateAdded desc
	 
		OFFSET (@offset) ROWS
		FETCH NEXT (@recordsPerPage) ROWS ONLY


select 	@recordsPerPage  RecordsPerPage  , 
		@currentPage   CurrentPageNo   , 
		@totalRecordCount TotalRecordCount ,
		@searchTerm SearchTerm


go




");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"


-- 08/12/2019 04:06 am - SSN - [20190812-0345] - [002] - Apply fulltext search  (C#-v02)
-- 09/10/2019 05:33 pm - SSN - RowVersion
-- 06/14/2021 05:45 am - SSN - Return key on.  We have to 'include' technologies in the query.  We are doing it in code.
-- 09/27/2022 12:48 pm - SSN - Add recordsPerPage and currentPage (c#)

ALTER   proc [DemoSites].[DevSites_FullTextSearch]
(
    @searchterm nvarchar(1000),
	@recordsPerPage int,
	@currentPage int
)
AS


if @searchTerm is null set @searchTerm = ''


declare @totalRecordCount int
declare @offset int 


declare @table table (id int primary key)

;
with x as (

	SELECT  [Id]  
		FROM [DemoSites].[DevSites] with (nolock)

	    WHERE 
			Contains( (SolutionName), @searchterm)
			or
			Contains( (SiteTitle), @searchterm)
			or
			Contains( (Solution_Details), @searchterm)
	 

)
insert into @table
	select id from x

select @totalRecordCount = @@ROWCOUNT


exec demosites.PagingVariables_Set
	@recordsPerPage output,
	@currentPage  output,
	@offset output,
	@totalRecordCount 



	SELECT aa.[Id]
      ,[SiteTitle]  
      ,[SiteUrl]
      ,[SolutionName]
      ,[Solution_Details]
      ,[DateAdded]
      ,[SoftwareCodeID]
      ,[DateUpdated]
      ,[CanBeLaunched]
      ,[ForDemo_v02],
	  LastActivityDate,
	  RowVersion
  FROM [DemoSites].[DevSites] aa with (nolock) 
	inner join @table bb on aa.id = bb.id
	 
	order by DateUpdated desc, DateAdded desc
	 
		OFFSET (@offset) ROWS
		FETCH NEXT (@recordsPerPage) ROWS ONLY


select 	@recordsPerPage  RecordsPerPage  , 
		@currentPage   CurrentPageNo   , 
		@totalRecordCount TotalRecordCount ,
		@searchTerm SearchTerm



go






drop function if exists DemoSites.fsql_CleanseFullTextSearchString 

drop function if exists DemoSites.fsql_replace


go


");

        }
    }
}
