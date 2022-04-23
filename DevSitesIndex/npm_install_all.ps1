# 04/22/2022 07:54 pm - SSN

$l = @(
'C:\Sams_P\DevSitesIndex\DevSitesIndex\package.json',
'C:\Sams_P\DevSitesIndex\DevSitesIndex\ReactApp\package.json',
'C:\Sams_P\DevSitesIndex\DevSitesIndex\timesheetsSupport7\package.json'
)

$l | % {

write '---------------------'
write-host $_ 

$file = get-item -path $_
$file.directoryName
set-location $($file.directoryName)

npm i

}
