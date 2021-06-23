using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 06/21/2021 02:34 am - SSN - [20210620-2108] - [012] - Update TimeLog create option to use DrowndownListDirective
 
using DevSitesIndex.Entities;
using DevSitesIndex.Util;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Services
{
    public class AspNetUsersRepository : IEntityRepository<AspNetUsers>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;


        public AspNetUsersRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
        }

   

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }


        public IQueryable<AspNetUsers> GetAll()
        {
            return this.context.AspNetUsers;
        }


        public AspNetUsers GetRecord(int id)
        {
            AspNetUsers r = this.context.AspNetUsers.Where(r2 => r2.PkUserId== id).FirstOrDefault();
            if (r == null)
            {
                throw new Exception($"No record was found for id {id} - DemoSites-20210621-0243");
            }
            return r;
        }


        public void Save()
        {
            throw new NotImplementedException();
        }

        public AspNetUsers Update(AspNetUsers dbSet, System.Security.Claims.ClaimsPrincipal user)
        {
            throw new NotImplementedException();
        }
    }
}
