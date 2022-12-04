rem 11/23/2022 01:41 pm - SSN

cd %~dp0

call powershell -noprofile ./ssn_npm_install_all.ps1 
call %~dp0p_buildall.cmd 
