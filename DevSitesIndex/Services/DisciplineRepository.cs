using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;

// 04/13/2019 10:48 am - SSN - [20190413-1037] - Add discipline lookup for timesheet

namespace DevSitesIndex.Services
{
    public class DisciplineRepository : IEntityRepository<Discipline>
    {
        private readonly DevSitesIndexContext _context;

        public DisciplineRepository(DevSitesIndexContext context)
        {
            this._context = context;
        }
         

        public IEnumerable<Discipline> GetAll()
        {
            // 04/20/2019 11:09 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            return _context.Disciplines.OrderBy(r=>r.DisciplineShort).AsNoTracking().ToList();
        }


        public Discipline GetRecord(int disciplineId)
        {
            var discipline = _context.Disciplines.Where(c => c.DisciplineId == disciplineId);

            return discipline.FirstOrDefault();
        }


        public Discipline  Update(Discipline discipline)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Discipline> r = null;
            try
            {
                if (discipline.DisciplineId== 0)
                {
                    r = _context.Disciplines.Add(discipline);
                }
                else
                {
                    r = _context.Disciplines.Update(discipline);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return discipline;
        }


        // 09/29/2019 09:56 am - SSN - [20190928-1256] - [020] - Adding Entity Framework model attribute
        // public bool Save()
        public Exception Save()
        {
            try
            {
                //return _context.SaveChanges() > 0;
                if (_context.SaveChanges() > 0) return default(Exception);

                return new Exception("20190929-0957 - Failed to save record.");
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                // return false;
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