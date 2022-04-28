@echo off
rem 04/27/2022 06:44 pm - SSN 

if "%1" == "1" goto s1
if "%1" == "2" goto s2
if "%1" == "3" goto s3

echo No case for option [%1]

goto end

:s1
cd %~dp0
prompt   NuGet - DevSitesIndex   $g 
goto end

:s2
cd C:\Sams_P\DevSitesIndex\SSN_DevSites_DAL_Standard
prompt   NuGet - DAL  $g 
goto end


:s3
cd C:\Sams_Projects\Training\SSN_GenUtil_StandardLib
prompt   NuGet - GenUtil   $g 
goto end


:end






