@echo off

cd %~dp0

rem 09/21/2019 05:27 am - SSN - Revise
rem Webpack watches ts files. No need for tsc
rem start tsc --build tsconfig.json -w

rem 7:02 AM 10/22/2019 - SSN - Revise
rem start "DevSitesIndex npm run build" npm run build 
call npm run build 

