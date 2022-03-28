using AutoMapper;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 03/28/2022 03:26 am - [20220328-0334] - [002] - Add AutoMapper
// install-package AutoMapper.Extensions.Microsoft.DependencyInjection -version 6.1.1

namespace DevSitesIndex.Mapper_Profiles
{
    public class AutoMapper_TimelogProfile : Profile
    {
        public AutoMapper_TimelogProfile()
        {
            CreateMap<Timelog_Search_Record, TimeLog>();
        }
    }
}
