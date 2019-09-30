using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

// 04/12/2019 11:39 am - SSN - [20190412-1126] - Timelog - save data


namespace DevSitesIndex.Services
{
    public interface IEntityRepository<T>
    {

        IEnumerable<T> GetAll();
        
        T GetRecord(int id);

        // 09/29/2019 09:49 am - SSN - [20190928-1256] - [016] - Adding Entity Framework model attribute
        T Update(T dbSet);
        // bool Save();
        Exception Save();

        void Dispose();
    }
}
