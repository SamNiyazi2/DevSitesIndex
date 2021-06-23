using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 06/13/2021 10:18 pm - SSN - [20210613-0452] - [025] - Adding tags to DevSite

namespace DevSitesIndex.Services
{
    public class TechnologyRepository : IEntityRepository<Technology>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;

        public TechnologyRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
        }

        public IQueryable<Technology> GetAll()
        {
            return context.Technologies.OrderBy(r => r.Description);
        }

        public Technology GetRecord(int id)
        {
            return context.Technologies.Where(r => r.Id == id).FirstOrDefault();
        }


        public Technology Update(Technology technology, System.Security.Claims.ClaimsPrincipal user)
        {

            // 06/15/2021 07:28 pm - SSN - [20210613-0452] - [050] - Adding tags to DevSite

            if (technology.Id  == 0)
            {
                context.Technologies.Add(technology);
            }
            else
            {
                context.Attach(technology).State = EntityState.Modified;
            }

            return technology;

        }

         
        public void Save()
        {
            context.SaveChanges();
        }
        

        public void Delete(int id)
        {
            throw new NotImplementedException();
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
