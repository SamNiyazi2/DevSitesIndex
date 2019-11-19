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

: 11/19/2019 02:07 pm  - SSN - Copied from DevSitesIndex
echo:
echo:
echo:
echo: Calling dotnet add package....
echo:
echo:
dotnet add package SSN_GenUtil_StandardLib -s c:\sams_nuget
echo:
echo:
echo Done.
echo:

