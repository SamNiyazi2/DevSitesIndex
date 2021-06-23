@echo off

start "DAL" %~dp0\..\SSN_DevSites_DAL_Standard\p.cmd


start "DevSitesIndex" %~dp0\p.cmd
 
start  "ssn_run_webpack" %~dp0\ssn_run_webpack.cmd



start "timesheetsSupport7" %~dp0\timesheetsSupport7\p.cmd
call %~dp0\timesheetsSupport7\ssn_build.cmd


:end
echo the end
:exit
