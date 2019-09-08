: 09/07/2019 02:05 am - SSN
@echo off
echo:
echo:
echo Publishing version [%1]
echo:
echo:
:echo Publish symbols...
:echo:
:c:\sams_nuget\nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\DevSites_DAL_NuGet_Pack_Output\DevSites_DAL_Standard.1%1.nupkg" -source c:\sams_nuget\packages
:echo
:
:echo:
:echo:
echo:
echo:
echo Publish package...
echo:
echo:
c:\sams_nuget\nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\DevSites_DAL_NuGet_Pack_Output\DevSites_DAL_Standard.%1.nupkg" -source c:\sams_nuget\packages
echo:
echo:
echo Done.
echo:
echo:


