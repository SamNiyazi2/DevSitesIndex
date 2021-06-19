
# 06/08/2021 12:48 am


# 50331697
# 50331697

# 98,306 kb
# 100,667,392


$fileName = ".\DropDownListDirective.html"
$fileContent = new-object System.IO.StreamReader -ArgumentList $fileName 

$sw = New-Object System.IO.StreamWriter ("temp_20210608.html")

$stopwatch1 = [System.Diagnostics.Stopwatch]::StartNew()

$stopwatch2 = [System.Diagnostics.Stopwatch]::StartNew()

function showElapsedTime {

    param(
        $title
    )

    $displayMessage = "{0}: {1:N5}  {2:N5} " -f $title , $($stopwatch1.Elapsed.TotalSeconds), $($stopwatch2.Elapsed.TotalSeconds)
    write-host $displayMessage
    $stopwatch1.Restart()
    showElapsedTime "Elapsed: "
}


$done = $false 

$linecounter = 0 

while (-not $done ) {

    $linecounter ++ 

    if ( $linecounter % 100000 -eq 0 ) {
        write-host $linecounter
    }
    
    $line = $fileContent.ReadLine();

    if ( -not  [string]::IsNullOrWhiteSpace($line)) {
        
        $sw.Write(  $line + "`r`n" );

    }

    if ( $null -eq $line -or $fileContent.EndOfStream) {
        $done = $true
        break
    }
}

$fileContent.close()
$fileContent.Dispose()


$sw.Close();
$sw.Dispose();
