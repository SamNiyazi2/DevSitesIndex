
# 09/07/2019 02:02 am - SSN - Copied from
#                             C:\Sams_Projects\SendGrid\SendGrid_101\SendGrid_101\SSNSendGridStandardUtil
# Build, pack and publish to local and remote NuGet
# 09/07/2019 08:50 am - SSN - Rename package
# 09/10/2019 12:11 pm - SSN - Clean up


param(
    
	
    [parameter(Mandatory)]
    $version,

    [parameter(Mandatory)]
    $option

)

Write-Host ""
Write-Host ""

switch ($option) {
    0 { 
        write-host "Locally deployed packages"
        write-host ""
        #        Invoke-Expression ".\List_NuGet_Versions.cmd"    
        dir "..\SSN_DevSites_DAL_NuGet_Pack_Output" | sort lastwritetime 
		  

        write-host ""
        break;
    }
    
    1 { 
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


    2 { 
        write-host "PS: Calling dotnet_pack.cmd..."
        Write-Host ""
        Write-Host ""
        # Invoke-Expression "dotnet pack --output ..\lib_pack_output -p:PackageVersion=$version --include-symbols" 
        Invoke-Expression "dotnet pack --output ..\SSN_DevSites_DAL_NuGet_Pack_Output  -p:PackageVersion=$version " 
        break;
        
    }


    3 { 
        write-host "PS: Calling Publish_Package_Local.cmd..."
        Write-Host ""
        Write-Host ""
    

		   $cmd = {
                param(
                    $version
                )
                & "c:\sams_nuget\nuget" push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.$version.nupkg" -source c:\sams_nuget\packages
            }
            Invoke-Command -Command $cmd -ArgumentList $version   

        break;
        
    }

    




	
        4 { 

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

            write-host "PS: Calling Publish_Package_Local.cmd..."
            Write-Host ""
            Write-Host ""




            $reply = ""
            $reply = read-host "Are you sure you want to publish to NuGet? "

 

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
				                     
             
				dotnet nuget push "C:\Sams_Projects\__DevSites_Index\DevSitesIndex\SSN_DevSites_DAL_NuGet_Pack_Output\SSN_DevSites_DAL_Standard.$version.nupkg"   -k $env:NuGet_Key -s https://api.nuget.org/v3/index.json



            }


            break;
        
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
        write-host ""

    }

}