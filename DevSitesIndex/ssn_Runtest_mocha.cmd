@echo off
: 11/18/2019 11:04 am - SSN 

cd %~dp0

start  "Mocha testing - DevSitesIndex" cmd /k node .\node_modules\mocha\bin\mocha .\testing_mocha     
 

