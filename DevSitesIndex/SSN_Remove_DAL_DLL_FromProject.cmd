
: 09/29/2019 07:03 pm - SSN - Remove reference to SSN_GenUtil_StandardLib.dll from project 

: 12/10/2020 08:13 am - Replace hard-coded address
echo "%~dp0\DevSitesIndex.csproj"

powershell -noprofile C:\sams\ps\XML\XML_RemoveReferenceFromProject.ps1 "%~dp0\DevSitesIndex.csproj" "SSN_DevSites_DAL_Standard" 

