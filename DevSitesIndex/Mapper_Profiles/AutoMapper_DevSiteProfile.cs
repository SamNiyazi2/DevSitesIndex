using AutoMapper;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;

namespace DevSitesIndex.Mapper_Profiles
{
    // 04/25/2022 07:47 pm - SSN
    public class AutoMapper_DevSiteProfile : Profile
    {
        public AutoMapper_DevSiteProfile()
        {
            CreateMap<DevSite, DevSite_DTO>();
            CreateMap<DevSite_DTO, DevSite>();
        }
    }
}
