using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// 09/22/2022 08:37 am - SSN 

namespace DevSitesIndex.Services
{
    public class RedirectUrlRepository : IEntityRepository<RedirectUrl>
    {
        private readonly DevSitesIndexContext _context;
        private readonly ILogger_SSN _logger;

        public RedirectUrlRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this._context = context;
            this._logger = logger;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException("DevSitesIndex-20220922-0840");
        }

        public void Dispose()
        {
            throw new NotImplementedException("DevSitesIndex-20220922-0841");
        }



        public void Save()
        {
            throw new NotImplementedException("DevSitesIndex-20220922-0842");
        }


        public RedirectUrl Update(RedirectUrl dbSet, ClaimsPrincipal user)
        {
            throw new NotImplementedException("DevSitesIndex-20220922-0843");
        }

        public IQueryable<RedirectUrl> GetAll()
        { 
            return _context.RedirectUrls.AsNoTracking();
        }

        public RedirectUrl GetRecord(int id)
        {
            throw new NotImplementedException("DevSitesIndex-20220922-0844");
        }

        public RedirectUrl GetRecord(Guid id)
        {
            return _context.RedirectUrls.AsNoTracking().FirstOrDefault(r=>r.ID == id);
        }

    }
}
