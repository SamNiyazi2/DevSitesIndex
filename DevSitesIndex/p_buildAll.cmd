@echo off

cd %~dp0

title p_buildAll

prompt DevSiteIndex build all $g 
 
start  "ssn_run_webpack" ssn_run_webpack.cmd
 
start "timesheetsSupport7 build" .\timesheetsSupport7\ssn_build.cmd

start "ReactApp build" .\ReactApp\ssn_run_webpack.cmd
 
