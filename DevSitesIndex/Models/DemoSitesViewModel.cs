using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


// 07/29/2018 10:15 am - SSN 

namespace DevSitesIndex.Models
{
    public class DemoSitesViewModel
    {
        // Todo  07/292018 04:05 pm - SSN - Replace DemoSite with DevSite
        public IEnumerable<DevSite> devSites;


        // 08/21/2018 03:57 am - SSN - Ref 
        // C:\Sams_Projects\PluralSight\html5-line-of-business-applications\d\demos\CodedHomes.Web\ViewModels\HomesListViewModel.cs

        public string devSitesJSON
        {
            get
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();

                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                var devSites = JsonConvert.SerializeObject(this.devSites, settings);
                return devSites;
            }
        }
    }
}
