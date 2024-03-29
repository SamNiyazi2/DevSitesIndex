﻿using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

// 09/21/2019 01:36 pm - SSN - [20190921-1129] - [006] - Plug in job status filter on job's index

namespace DevSitesIndex.Services
{
    public class Job_StatusRepository : IEntityRepository<Job_Status>
    {
        private readonly DevSitesIndexContext context;

        public Job_StatusRepository(DevSitesIndexContext context)
        {
            this.context = context;
        }

        public IQueryable<Job_Status> GetAll()
        {
            return context.Job_Statuses.AsNoTracking();
        }

        public Job_Status GetRecord(int id)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public Job_Status Update(Job_Status dbSet, System.Security.Claims.ClaimsPrincipal user)
        {
            throw new NotImplementedException();
        }


        public void Delete(int id)
        {
            throw new NotImplementedException();
        }


        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {

                }

                disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }


        #endregion




    }
}
