
# 09/07/2019 02:02 am - SSN - Copied from
#                             C:\Sams_Projects\SendGrid\SendGrid_101\SendGrid_101\SSNSendGridStandardUtil
# Build, pack and publish to local and remote NuGet
# 09/07/2019 08:50 am - SSN - Rename package

param(
    
	
    [parameter(Mandatory)]
    $version,

    [parameter(Mandatory)]
    $option

)




function write-heading {

    param ($caption)

    write-host ""
    write-host $caption
    write-host ""
    write-host ""

}


function step_00_list_existing_packages() {

    write-heading "Locally deployed packages"
    dir \sams_nuget\packages\ssn_devsites_dal_standard | sort LastWriteTime  
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
    Invoke-Expression "dotnet pack --output ..\SSN_DevSites_DAL_NuGet_Pack_Output  -p:PackageVersion=$version " 

}


# 09/14/2019 12:06 amm - SSN - Refactor
function step_03_publish_local {

    param(
        [parameter(Mandatory)]
        $version
    )

    write-heading  "PS: Calling Publish_Package_Local.cmd..."
    Invoke-Expression ".\Publish_Package_Local.cmd $version" 

}


# 09/14/2019 12:06 amm - SSN - Refactor
function step_04_publish_remote {

    param(
        [parameter(Mandatory)]
        $version
    )

    write-heading   "PS: Calling Publish_Package_Local.cmd..."
    Invoke-Expression ".\Publish_Package_NuGet.cmd $version" 

}



Write-Host ""
Write-Host ""

switch ($option) {


    0 { step_00_list_existing_packages  }
    
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