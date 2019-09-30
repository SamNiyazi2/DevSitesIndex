﻿using System;
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

            return _context.Jobs.OrderBy(r => r.JobTitle).AsNoTracking().ToList();
        }


        public Job GetRecord(int jobId)
        {
            var job = _context.Jobs.Where(c => c.JobID == jobId);

            return job.FirstOrDefault();
        }


        public Job Update(Job job)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Job> r = null;
            try
            {
                if (job.JobID == 0)
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

        // 09/29/2019 09:52 am - SSN - [20190928-1256] - [018] - Adding Entity Framework model attribute
        // public bool Save()
        public Exception Save()
        {
            try
            {
                // return _context.SaveChanges() > 0;
                if (_context.SaveChanges() > 0) throw default(Exception);

                return new Exception("20190929-0954 - Failed to save record. ");

            }
            catch (Exception ex)
            {
                string message = ex.Message;

                // 09/29/2019 09:55 am - SSN - [20190928-1256] - [019] - Adding Entity Framework model attribute
                //return false;
                throw;
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