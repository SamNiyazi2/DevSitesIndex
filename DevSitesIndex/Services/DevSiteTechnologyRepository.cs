using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 06/16/2021 03:51 am - SSN - [20210613-0452] - [063] - Adding tags to DevSite

namespace DevSitesIndex.Services
{
    public class DevSiteTechnologyRepository : IEntityRepository<DevSiteTechnology>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;


        public DevSiteTechnologyRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
        }




        IQueryable<DevSiteTechnology> IEntityRepository<DevSiteTechnology>.GetAll()
        {
            throw new NotImplementedException();
        }

        DevSiteTechnology IEntityRepository<DevSiteTechnology>.GetRecord(int id)
        {
            throw new NotImplementedException();
        }



        public DevSiteTechnology Update(DevSiteTechnology devSiteTechnology, System.Security.Claims.ClaimsPrincipal user)
        {

            if (devSiteTechnology.Id == 0)
            {
                context.DevSiteTechnologies.Add(devSiteTechnology);
            }
            else
            {
                context.Attach(devSiteTechnology).State = EntityState.Modified;
            }

            return devSiteTechnology;
        }


        public void Save()
        {
            context.SaveChanges();
        }



        public void Delete(int id)
        {
            DevSiteTechnology existingRec = context.DevSiteTechnologies.Where(r => r.Id == id).FirstOrDefault();
            if (existingRec != null)
            {
                context.DevSiteTechnologies.Remove(existingRec);
            }
            else
            {
                throw new Exception("Record does not exist or was deleted.");
            }

        }



        public void Dispose()
        {
            if (context != null)
            {
                context.Dispose();
            }
        }


    }
}
