﻿using DevSitesIndex.Entities;
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
        T Update(T dbSet);

        T GetRecord(int id);

        bool Save();
        void Dispose();
    }
}