
# 09/07/2019 02:02 am - SSN - Copied from
#                             C:\Sams_Projects\SendGrid\SendGrid_101\SendGrid_101\SSNSendGridStandardUtil
# Build, pack and publish to local and remote NuGet
# 09/07/2019 08:50 am - SSN - Rename package
# 04/11/2022 11:15 pm - SSN - Use generic "C:\Sams\PS\NuGet\NuGet_Deploy.ps1"


param(
    
	
    [parameter(Mandatory)]
    $version,

    [parameter(Mandatory)]
    $option,

    [switch]
    $override = $false
    
)

$ErrorActionPreference = "stop"

$fullProjectNameSpec = $psscriptroot + "\*.csproj"

. "C:\Sams\PS\NuGet\NuGet_Deploy.ps1" -fullProjectNameSpec $fullProjectNameSpec   -version $version   -option $option   -override:$override 

