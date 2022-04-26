using AutoMapper;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/25/2022 08:54 pm - SSN

namespace DevSitesIndex.Mapper_Profiles
{
    public class AutoMapper_DevSiteTechnologyProfile : Profile
    {
        public AutoMapper_DevSiteTechnologyProfile()
        {
            CreateMap<DevSiteTechnology, DevSiteTechnology_DTO>();
            CreateMap<DevSiteTechnology_DTO, DevSiteTechnology>();
        }

    }
}
