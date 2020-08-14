@echo off
: 11/06/2019 12:32 am - SSN

set x1233=%cd%

cd %~dp0

call ng build --prod   --aot=true  %1

cd %x1233%
