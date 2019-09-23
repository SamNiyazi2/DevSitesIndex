using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;

// 09/16/2019 04:00 am - SSN - [20190916-0355] - [002] - Adding JobAPI controller
//  Replacing input on timesheet edit

namespace DevSitesIndex.Services
{
    public class JobRepository : IEntityRepository<Job>
    {
        private readonly DevSitesIndexContext _context;

        public JobRepository(DevSitesIndexContext context)
        {
            this._context = context;
        }
         

        public IEnumerable<Job> GetAll()
        {

            return _context.Jobs.OrderBy(r=>r.JobTitle).AsNoTracking().ToList();
        }


        public Job GetRecord(int jobId)
        {
            var job = _context.Jobs.Where(c => c.JobID == jobId);

            return job.FirstOrDefault();
        }


        public Job  Update(Job job)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Job> r = null;
            try
            {
                if (job.JobID== 0)
                {
                    r = _context.Jobs.Add(job);
                }
                else
                {
                    r = _context.Jobs.Update(job);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return job;
        }


        public bool Save()
        {
            try
            {
                return _context.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return false;
            }
        }

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }


    }
}