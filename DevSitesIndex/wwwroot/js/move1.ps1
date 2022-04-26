
# 04/26/2022 06:57 am - SSN - For renaming / moving files with git consideration

$errorActionPreference = "stop"
$error.clear()

. C:\Sams\PS\Git\git-move-rename-files-util.ps1

$fileSpec = "DemoSite*.*"


$oldPath = "C:\Sams_P\DevSitesIndex\DevSitesIndex\wwwroot\js"
$newPath = "C:\Sams_P\DevSitesIndex\DevSitesIndex\wwwroot\js\DevSite"

do-rename-move-file -oldPath $oldPath -newPath $newPath -fileSpec $fileSpec