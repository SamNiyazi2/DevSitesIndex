@echo off
: 09/07/2019 03:19 am - SSN
: 09/16/2019 02:20 pm - SSN - Remove

echo:
echo:
echo:
echo:
dotnet remove package ssn_devsites_dal_standard
echo:
echo:
echo:
echo:

: 09/29/2019 10:08 am - SSN - Added remove project reference ..\SSN_DevSites_DAL_Standard\SSN_DevSites_DAL_Standard.csproj
echo:
echo:
echo:
echo:
echo Calling  SSN_Remove_DAL_DLL_FromProject.cmd...
echo:
echo:
call SSN_Remove_DAL_DLL_FromProject
echo:
echo:
echo:
echo:
echo: Calling dotnet add package....
echo:
echo:
dotnet add package SSN_DevSites_DAL_Standard -s c:\sams_nuget
echo:
echo:
echo Done.
echo:

