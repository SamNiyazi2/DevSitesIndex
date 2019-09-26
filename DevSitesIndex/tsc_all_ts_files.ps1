
# 09/20/2019 07:35 am - SSN - Compile all *.ts files

param(
    $option
)


if ($option -notin @(1, 2,3)) {

    write-host ""
    write-host "Syntax: command <option>"
    write-host "Syntax: Option 1 = List all ts files.  ('./DataServices.ts',)"
    write-host "        Option 2 = List all ts files.  (""wwwroot/js/DataServices.ts"",)"
    write-host "        Option 3 = Recompile all ts files in current directory excluding node_modules"
    write-host ""
    return;
}




$excludeList = @(
    "C:\Sams\DevSitesIndex\DevSitesIndex\node_modules*"
)

 

$filesList = Get-ChildItem -Path "." -Filter "*.ts" -Recurse | 
where { $_.DirectoryName -notlike $excludeList }   #|
#   sort DirectoryName  | select -Unique DirectoryName 


$Script = {
    param( $fileName)
    write-host "Full name " $fileName
    tsc $fileName 
}


foreach ( $file in $filesList ) { 

    if ($option -eq "1") {
        $outputLine = "'{0}'," -f $file.FullName.replace('C:\Sams\DevSitesIndex\DevSitesIndex\wwwroot\js\', './').replace("\", "/")
        write-host $outputLine 
    }
        
    if ($option -eq "2") {
        $outputLine = """{0}""," -f $file.FullName.replace('C:\Sams\DevSitesIndex\DevSitesIndex\', '').replace("\", "/")
        write-host $outputLine 
    }
       
            
    if ($option -eq "3") {

         Invoke-Command  -ScriptBlock $script -ArgumentList $file.FullName
    }

}

$d = [system.datetime]::Now;

write-host ""
write-host $d
write-host ""