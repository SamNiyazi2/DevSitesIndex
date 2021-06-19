@echo off
: 09/07/2019 03:19 am - SSN
: 09/16/2019 02:20 pm - SSN - Remove
: 11/19/2019 02:28 pm - SSN - Add project file name to donet remove and add.
echo:
echo:
echo:
echo:
dotnet remove DevSitesIndex.csproj package ssn_devsites_dal_standard
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
: 8:09 AM 12/10/2020 Updated c:\sams_nuget with c:\sams_nuget\packages.
echo:
dotnet add DevSitesIndex.csproj package SSN_DevSites_DAL_Standard -s c:\sams_nuget\packages
echo:
echo:
echo Done.
echo:

