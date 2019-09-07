
@echo off
: Not providing an answer defaults to "N"
set /p ask=Are you usre you want to update to NuGet.org? (Y/N)

if "%ask%" == "Y" goto yes
if "%ask%" == "y" goto yes
if "%ask%" == "N" goto no
if "%ask%" == "n" goto no


goto end

:yes

: Do somtihg

goto end



:no

: Mabye something else

goto end

:end


