using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using AutoMapper;


// 07/29/2018 10:15 am - SSN 

namespace DevSitesIndex.Models
{


    // 04/27/2022 03:24 pm - SSN - [20220427-1524] - [001] - Add DTO for devSitesTechnologies
    public class DevSite_Combo
    {

        public DevSite devSite_v04 { get; set; } = new DevSite();
        public DevSite_DTO devSiteDTO__v04 { get; set; } = new DevSite_DTO();


        private static IMapper mapper;

        public static List<DevSite_Combo> devSites_input(IEnumerable<DevSite> input)
        {
            List<DevSite_Combo> _devSite_combos = new List<DevSite_Combo>();

            mapper = (IMapper)GetMeSomeServiceLocator.Instance.GetService(typeof(IMapper));

            foreach (DevSite devSite in input)
            {
                DevSite_Combo r = new DevSite_Combo();
                r.devSite_v04 = devSite;
                r.devSiteDTO__v04 = mapper.Map<DevSite, DevSite_DTO>(devSite);
                _devSite_combos.Add(r);
            }

            return _devSite_combos;

        }


    }

    public class DemoSitesViewModel
    {

        // Todo  07/29/2018 04:05 pm - SSN - Replace DemoSite with DevSite

        // 04/27/2022 03:24 pm - SSN - [20220427-1524] - [001] - Add DTO for devSitesTechnologies

        // public IEnumerable<DevSite> devSites;
        public List<DevSite_Combo> devSites_Combo_v03 = new List<DevSite_Combo>();


        // 04/16/2019 07:37 pm - SSN - [20190416-1937] - Corrrection angular version for P2 and P3
        public string selectedPage { get; set; }

        // 08/21/2018 03:57 am - SSN - Ref 
        // C:\Sams_Projects\PluralSight\html5-line-of-business-applications\d\demos\CodedHomes.Web\ViewModels\HomesListViewModel.cs


        // 08/12/2019 05:18 am - SSN - [20190812-0515] - [002] - Apply fulltext search
        public string SearchText { get; set; }



        public string devSitesJSON
        {
            get
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();

                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                // 08/12/2019 05:21 am - SSN - [20190812-0515] - [003] - Apply fulltext search
                Console.WriteLine("Testing-20190812-0521");

                var devSites = JsonConvert.SerializeObject(this.devSites_Combo_v03, settings);
                return devSites;
            }
        }
    }
}
