
# 09/07/2019 02:02 am - SSN - Copied from
#                             C:\Sams_Projects\SendGrid\SendGrid_101\SendGrid_101\SSNSendGridStandardUtil
# Build, pack and publish to local and remote NuGet
# 09/07/2019 08:50 am - SSN - Rename package

param(
    
	
    [parameter(Mandatory)]
    $version,

    [parameter(Mandatory)]
    $option,

    [switch]
    $override = $false
    
)


write-warning $override

# 09/16/2019 11:59 am - SSN - [20190916-1123] - [004] - Adding job status - Optiokn to override - Delete piece

function delete-package () {

    param ($version)

    if ( -not $override ){
        return
    }
    

    $TheCurrentlyExecutingScriptRootPath = $MyInvocation.PSScriptRoot

    $project = get-item -Path $TheCurrentlyExecutingScriptRootPath -Filter "*.crproj"
    
    $targetDir = "C:\Sams_NuGet\Packages\$($project.name)" 

    write-warning    "Deleting $targetDir"

    $fileslist = get-childitem -path $targetDir -Filter "$version" 

    $fileslist | remove-item
     
}

function write-heading {

    param ($caption)

    write-host ""
    write-host $caption
    write-host ""
    write-host ""

}


function step_00_list_existing_packages() {

    write-heading "Locally deployed packages"
    get-childitem  \sams_nuget\packages\ssn_devsites_dal_standard | sort LastWriteTime  
}


# 09/14/2019 12:06 amm - SSN - Refactor
function step_01_build {

    param(
        [parameter(Mandatory)]
        $version
    )
    
    write-heading "PS: Calling dotnet_build.cmd..."

    $cmd = {
        param(
            $version
        )
        Invoke-Expression "dotnet build" 
    }
    Invoke-Command -Command $cmd -ArgumentList $version   

}


# 09/14/2019 12:06 amm - SSN - Refactor
function step_02_pack {

    param(
        [parameter(Mandatory)]
        $version
    )

    write-heading "PS: Calling dotnet_pack.cmd..."

    # Invoke-Expression "dotnet pack --output ..\lib_pack_output -p:PackageVersion=$version --include-symbols" 

# 09/18/2019 07:13 am - SSN - Added --include-symbols --include-source
    Invoke-Expression "dotnet pack --output ..\SSN_DevSites_DAL_NuGet_Pack_Output  -p:PackageVersion=$version   --include-symbols --include-source "

}


# 09/14/2019 12:06 am - SSN - Refactor
# 09/16/2019 06:25 am - SSN - Missed revision - Anther Git moment
function step_03_publish_local {

    param(
        [parameter(Mandatory)]
        $version
    )

    write-heading  "PS: Publish to local NuGet..."

    

    $cmd = {
        param(
            $version
        )
    
        delete-package -version $version  

#        & "c:\sams_nuget\nuget" push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.$version.nupkg" -source c:\sams_nuget\packages
        & "c:\sams_nuget\nuget" push "..\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.$version.nupkg" -source c:\sams_nuget\packages
    }


    Invoke-Command -Command $cmd -ArgumentList $version   


}


# 09/14/2019 12:06 amm - SSN - Refactor
function step_04_publish_remote {

    param(
        [parameter(Mandatory)]
        $version
    )


    write-host ""
    write-host ""
    write-host ""
    write-host ""
    write-warning "Do we have the key?"
    write-host ""
    write-host ""
    write-host ""
    write-host ""
    write-warning [$env:NuGet_Key]
    write-host ""
    write-host ""
    write-host ""
    write-host ""

    write-host "PS: Pushing to Remote NuGet... $version"
    Write-Host ""
    Write-Host ""




    $reply = ""
    $reply = read-host "Are you sure you want to publish to NuGet? [YES]"



    if ( [System.string]::IsNullOrWhiteSpace(  $reply)) {
        $reply = "No"
    }

    write-host $reply 

    if ( $reply.ToUpper() -eq "YES" ) {


        write-host ""
        write-host ""
        write-host "Publishing..."


        write-host ""
        write-host ""


        dotnet nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.$version.nupkg"  -k $env:NuGet_Key -s https://api.nuget.org/v3/index.json


    }
























}



Write-Host ""
Write-Host ""

switch ($option) {


    0 { step_00_list_existing_packages }
    
    1 { step_01_build -version $version }
    2 { step_02_pack -version $version }
    3 { step_03_publish_local -version $version }
    4 { step_04_publish_remote -version $version }

    5 { 
        step_01_build -version $version
        step_02_pack -version $version
        step_03_publish_local -version $version
    }


    Default { 
	
        write-host ""
        write-host "Syntax: <version_no 1.0.0> <option>"
        write-host ""
        write-host "0: List already locally deployed package versions"
        write-host "1: Build"
        write-host "2: Pack"
        write-host "3: Publish local"
        write-host "4: Publish NuGet"
        write-host "5: Runs 1, 2 and 3"
        write-host ""

    }

}

