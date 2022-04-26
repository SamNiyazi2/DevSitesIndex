using AutoMapper;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/25/2022 08:57 pm 

namespace DevSitesIndex.Mapper_Profiles
{
    public class AutoMapper_TechnologyProfile : Profile
    {
        public AutoMapper_TechnologyProfile()
        {
            CreateMap<Technology, Technology_DTO>();
            CreateMap<Technology_DTO, Technology>();
        }
    }
}
