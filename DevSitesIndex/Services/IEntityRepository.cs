using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

// 04/12/2019 11:39 am - SSN - [20190412-1126] - Timelog - save data


namespace DevSitesIndex.Services
{
    public interface IEntityRepository_v01<T>
    {

        IEnumerable<T> GetAll();

        T GetRecord(int id);

        // 09/29/2019 09:49 am - SSN - [20190928-1256] - [016] - Adding Entity Framework model attribute
        T Update(T dbSet);
        // bool Save();
        Exception Save();

        void Dispose();
    }



    // 10/21/2019 08:37 pm - SSN - [20191021-2033] - [002] - Revise timelog search returned result

    public interface IEntityRepository_v02<T>
    {

        IQueryable<T> GetAll();

        T GetRecord(int id);

        // 09/29/2019 09:49 am - SSN - [20190928-1256] - [016] - Adding Entity Framework model attribute
        T Update(T dbSet);
        // bool Save();
        Exception Save();

        void Dispose();
    }
}
