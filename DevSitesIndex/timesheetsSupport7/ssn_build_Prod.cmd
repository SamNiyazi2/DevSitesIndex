@echo off
: 11/06/2019 12:32 am - SSN

set x1233=%cd%

cd %~dp0

rem 08/11/2021 06:48 am - SSN - Replaced
rem call ng build --prod   --aot=true  %1
call npm run build_prod
echo done build_prod.


cd %x1233%
