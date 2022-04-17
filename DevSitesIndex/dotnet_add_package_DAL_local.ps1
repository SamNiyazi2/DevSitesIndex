# 09/07/2019 03:19 am - SSN
# 09/16/2019 02:20 pm - SSN - Remove
# 11/19/2019 02:28 pm - SSN - Add project file name to donet remove and add.
# 04/11/2022 11:41 pm - SSN - Convert to ps1

$erroractionpreference = "stop"

$error.clear()
0..10|%{""}
get-date 
""


. C:\Sams\PS\NuGet\add-nuget-package-util.ps1



$projectName = "$psscriptroot\devsitesindex.csproj"

$packageName = "SSN_DevSites_DAL_Standard"

 add-nugetPackage -projectName $projectName -packageName $packageName

  

   

