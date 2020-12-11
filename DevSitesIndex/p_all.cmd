@echo off

start "DAL" C:\Sams_p\DevSitesIndex\SSN_DevSites_DAL_Standard\p.cmd


start "DevSitesIndex" C:\Sams_p\DevSitesIndex\DevSitesIndex\p.cmd
 
start  "ssn_run_webpack" C:\Sams_p\DevSitesIndex\DevSitesIndex\ssn_run_webpack.cmd



start "timesheetsSupport7" C:\Sams_p\DevSitesIndex\DevSitesIndex\timesheetsSupport7\p.cmd
call C:\Sams_p\DevSitesIndex\DevSitesIndex\timesheetsSupport7\ssn_build.cmd


:end
echo the end
:exit
