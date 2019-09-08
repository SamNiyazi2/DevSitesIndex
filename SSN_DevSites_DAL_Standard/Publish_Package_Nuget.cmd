: 09/07/2019 07:21 pm - SSN - Date as of second time we pubish
: 09/07/2019 08:48 pm - SSN - Name conflict

@echo off

echo:
echo:
echo Publishing version [%1]
echo:
echo:
echo:  Do we have the key [%NuGet_Key%]
echo:
echo:

set ask=
set /p ask=Are you usre you want to update to NuGet.org? (Y/N)
:echo
:echo
:echo

if  "%ask%" == "Y" goto DoIt
if  "%ask%" == "y" goto DoIt

goto EndIt

:DoIt

:echo
:echo
:echo


:echo Publish symbols...
:echo:
:Dotnet nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.%1.nupkg" -k %NuGet_Key% -s https://api.nuget.org/v3/index.json
:echo
:echo
:echo:

:echo:
echo:
echo:
echo Publish package...
echo:
echo:

dotnet nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.%1.nupkg"  -k %NuGet_Key% -s https://api.nuget.org/v3/index.json

echo:
echo:
echo Done.
echo:
echo:


:EndIt
