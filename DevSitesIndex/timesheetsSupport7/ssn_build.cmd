@echo off
: 10/02/2019 12:35 pm - SSN

cd %~dp0


:for /?


goto build



set ask=
set /p ask=Rebuild timesheetsSupport7? (Y/N)

echo [%ask%]

if "%ask%" == "Y" goto build
if "%ask%" == "y" goto build

echo Failed Yes check. Going to end.

goto end

:build

set currentPath=%cd%

cd %~dp0

:start /WAIT ng build --watch
start ng build --watch


cd %currentPath%

set currentPath=

:end
 
