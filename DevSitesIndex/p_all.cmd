@echo off

start "DAL" C:\Sams\DevSitesIndex\SSN_DevSites_DAL_Standard\p.cmd


start "DevSitesIndex" C:\Sams\DevSitesIndex\DevSitesIndex\p.cmd
 
call  C:\Sams\DevSitesIndex\DevSitesIndex\ssn_run_webpack.cmd



start "timesheetsSupport7" C:\Sams\DevSitesIndex\DevSitesIndex\timesheetsSupport7\p.cmd
call C:\Sams\DevSitesIndex\DevSitesIndex\timesheetsSupport7\ssn_build.cmd


:end
echo the end
exit
