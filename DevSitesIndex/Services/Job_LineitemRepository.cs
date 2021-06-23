using DevSitesIndex.Entities;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 12/10/2020 04:42 pm - SSN - [20201210-1625] - [004] - Update Timelog edit MVC

using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Services
{
    public class Job_LineitemRepository : IEntityRepository<Job_Lineitem>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;

        public Job_LineitemRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
        }

        public IQueryable<Job_Lineitem> GetAll()
        {

            IQueryable<Job_Lineitem> result = context.Job_Lineitems
                .OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking();

            return result;
        }

        public Job_Lineitem GetRecord(int id)
        {
            return context.Job_Lineitems.Where(r => r.LineItemId == id).FirstOrDefault();
        }


        public Job_Lineitem Update(Job_Lineitem job_LineItem, System.Security.Claims.ClaimsPrincipal user)
        {
            // Copied from TimeLogRepository.  Keep in sync.

            job_LineItem.job = null;

 
            if (job_LineItem.LineItemId == 0)
            {
                context.Job_Lineitems.Add(job_LineItem);
            }
            else
            {
                context.Attach(job_LineItem).State = EntityState.Modified;
            }

            return job_LineItem;
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
