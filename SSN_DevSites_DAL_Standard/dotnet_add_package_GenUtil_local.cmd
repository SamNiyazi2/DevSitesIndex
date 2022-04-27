@echo off
: 09/07/2019 03:19 am - SSN
: 09/16/2019 02:20 pm - SSN - Remove
: 06/20/2021 03:05 am - SSN - donet no longer sees package versions.
: 08/11/2021 02:48 am - SSN - Revised syntax


: 08/11/2021 02:48 am - SSN - Revised syntax
:if "%1" == "" goto error1

echo:
echo:
echo:
echo:
dotnet remove SSN_DevSites_DAL_Standard.csproj package ssn_devsites_dal_standard
echo:
echo:
echo:
echo:

: 11/19/2019 02:07 pm  - SSN - Copied from DevSitesIndex
echo:
echo:
echo:
echo: Calling dotnet add package....
echo:
echo:


: 08/11/2021 02:48 am - SSN - Revised syntax

: dotnet add package SSN_GenUtil_StandardLib -s c:\sams_nuget  --version %1
dotnet add  SSN_DevSites_DAL_Standard.csproj package SSN_GenUtil_StandardLib -s c:\sams_nuget\packages
echo:
echo:
echo Done.
echo:


goto end1


:error1

echo:
echo Must provide version number.
echo:



:end1
