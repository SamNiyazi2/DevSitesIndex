
# 09/07/2019 02:02 am - SSN - Copied from
#                             C:\Sams_Projects\SendGrid\SendGrid_101\SendGrid_101\SSNSendGridStandardUtil
# Build, pack and publish to local and remote NuGet

param(
    
	
	[parameter(Mandatory)]
    $version,

	[parameter(Mandatory)]
    $option

)

Write-Host ""
Write-Host ""

switch  ($option)
{
    1
    { 
        write-host "PS: Calling dotnet_build.cmd..."
        Write-Host ""
        Write-Host ""
        $cmd = {
            param(
                $version
            )
            Invoke-Expression "dotnet build" 
        }
        Invoke-Command -Command $cmd -ArgumentList $version   
        break;
    }


    2
    { 
        write-host "PS: Calling dotnet_pack.cmd..."
        Write-Host ""
        Write-Host ""
        # Invoke-Expression "dotnet pack --output ..\lib_pack_output -p:PackageVersion=$version --include-symbols" 
        Invoke-Expression "dotnet pack --output ..\DevSites_DAL_NuGet_Pack_Output  -p:PackageVersion=$version " 
        break;
        
    }


    3
    { 
        write-host "PS: Calling Publish_Package_Local.cmd..."
        Write-Host ""
        Write-Host ""
        Invoke-Expression ".\Publish_Package_Local.cmd $version" 
        break;
        
    }

    4
    { 
        write-host "PS: Calling Publish_Package_Local.cmd..."
        Write-Host ""
        Write-Host ""
        Invoke-Expression ".\Publish_Package_NuGet.cmd $version" 
        break;
        
    }

    Default { 
	
		write-host ""
		write-host "Syntax: <version_no 1.0.0> <option>"
		write-host ""
		write-host "1: Build"
		write-host "2: Pack"
		write-host "3: Publish local"
		write-host "4: Publish NuGet"
		write-host ""

	}

}