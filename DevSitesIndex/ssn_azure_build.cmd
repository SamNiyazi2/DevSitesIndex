
rem 11/28/2019 08:45 pm - SSN 

cd %~dp0

dir
call npm install
call ssn_run_webpack_prod
dir
