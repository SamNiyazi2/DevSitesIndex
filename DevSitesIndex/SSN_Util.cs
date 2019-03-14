using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 03/14/2019 02:30 pm - SSN - Created
// Source: https://developers.de/blogs/damir_dobric/archive/2017/06/27/how-to-deal-with-assembly-version-in-net-core.aspx

using System.Reflection;


namespace DevSitesIndex
{
    public class SSN_Util
    {
        /// <summary>
        /// Return a URL suffix to append to a URL for cache busting.
        /// Result: ?v=0_0_0
        /// </summary>
        /// <returns></returns>
        public static string getFileVersionUrlSuffix()
        {
            return getAssemblyVersion().ToString().Replace(".", "_");

        }

        /// <summary>
        /// Get assembly version number as a string
        /// </summary>
        /// <returns></returns>
        public static string getAssemblyVersion()
        {
            var ver = Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;

            var attrs = typeof(Startup) 
                .GetTypeInfo() 
                .Assembly.GetCustomAttributes();


            var runtimeVersion = typeof(Startup) 
                .GetTypeInfo()
                .Assembly 
                .GetCustomAttribute<AssemblyFileVersionAttribute>();


            // var tokens = runtimeVersion.Version.Split('.');

            // Version m_Version = new Version(runtimeVersion.Version);

            return runtimeVersion.Version;
        }


    }
}
