: 09/07/2019 07:21 pm - SSN - Date as of second time we pubish
@echo off
echo:
echo:
echo Publishing version [%1]
echo:
echo:
echo:  Do we have the key [%NuGet_Key%]
echo:
echo:
echo:
:echo Publish symbols...
:echo:
:c:\sams_nuget\nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\DevSites_DAL_NuGet_Pack_Output\DevSites_DAL_Standard.1%1.nupkg" -k %NuGet_Key% -s https://api.nuget.org/v3/index.json
:echo
:echo
:echo:

set ask=
set /p ask=Are you usre you want to update to NuGet.org? (Y/N)
:echo
:echo
:echo

if  "%ask%" == "Y" goto DoPush
if  "%ask%" == "y" goto DoPush

goto EndIt

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


:EndIt
