@echo off

cd %~dp0

rem Build AngulaJS project

rem 09/21/2019 05:27 am - SSN - Revise
rem Webpack watches ts files. No need for tsc
rem start tsc --build tsconfig.json -w

rem 7:02 AM 10/22/2019 - SSN - Revise
rem start "DevSitesIndex npm run build" npm run build 
rem 11/28/2019 06:02 pm - SSN - Using pakcage.json build for Azure
rem call npm run build 

rem 11:08 AM 4/13/2021
rem webpack --progress --color  --watch --display-error-details --info-verbosity  
rem Installed 3.4.1 after messing up webpack from somewhere else.
rem Take out --info-verbosity  
webpack --progress --color  --watch --display-error-details 

