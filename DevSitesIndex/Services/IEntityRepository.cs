using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

// 04/12/2019 11:39 am - SSN - [20190412-1126] - Timelog - save data


namespace DevSitesIndex.Services
{ 

    // 10/21/2019 08:37 pm - SSN - [20191021-2033] - [002] - Revise timelog search returned result

    public interface IEntityRepository<T>
    {

        IQueryable<T> GetAll();

        T GetRecord(int id);

        // 09/29/2019 09:49 am - SSN - [20190928-1256] - [016] - Adding Entity Framework model attribute
        T Update(T dbSet);


        // 11/16/2019 08:02 pm - SSN - [20191116-1516] - [009] - Timelog edit (AngularJS client version)
        // from exception to void
        void Save();


        // 06/16/2021 08:37 pm - SSN - [20210613-0452] - [104] - Adding tags to DevSite
        void Delete(int id);


        void Dispose();
    }
}
