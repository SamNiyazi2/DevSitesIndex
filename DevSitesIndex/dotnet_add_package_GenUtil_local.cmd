
: 09/10/2019 09:54 am - SSN

: 09/29/2019 06:40 pm - SSN - Added
: 11/19/2019 02:31 pm - SSN - Renamed

: 06/20/2021 02:56 am - SSN - Not recognizing versions 

if "%1" == "" goto error1

call SSN_Remove_GenUtil_DLL_FromProject

echo Adding Version %1

dotnet add DevSitesIndex.csproj package ssn_genutil_standardlib -s c:\sams_nuget --version %1

goto end1


:error1 
echo:
echo Must provide package version number.
echo:

:end1

