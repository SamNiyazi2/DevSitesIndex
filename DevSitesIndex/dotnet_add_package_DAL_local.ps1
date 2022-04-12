# 09/07/2019 03:19 am - SSN
# 09/16/2019 02:20 pm - SSN - Remove
# 11/19/2019 02:28 pm - SSN - Add project file name to donet remove and add.
# 04/11/2022 11:41 pm - SSN - Convert to ps1

$erroractionpreference = "stop"

$error.clear()
0..10|%{""}
get-date 
""


. "C:\Sams\PS\Util\write-host-util.ps1"



$projectName = "$psscriptroot\devsitesindex.csproj"

$packageName = "SSN_DevSites_DAL_Standard"



$project = get-childitem  $projectName -errorAction silentlycontinue | where name -match '\.*[^_\d*].csproj' 

$project 
 
if ( $null -eq $project ) {
	write-host $projectName -foregroundcolor yellow
	write-error "File not found"
}

dotnet remove $projectName package $packageName 


write-section-header "Calling  SSN_Remove_CEC.Routing-plain_FromProject..."


. 'C:\sams\ps\XML\XML_RemoveReferenceFromProject.ps1' -fileName $projectName  -referenceName $packageName 
 
 
write-section-header "Calling dotnet add package...."

dotnet remove $projectName package $packageName 


dotnet add $projectName package $packageName  -s c:\sams_nuget\packages


write-section-header "Done."

   

