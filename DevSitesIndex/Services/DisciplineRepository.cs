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
            return _context.Discipline.OrderBy(r=>r.DisciplineShort).ToList();
        }


        public Discipline GetRecord(int disciplineId)
        {
            var discipline = _context.Discipline.Where(c => c.DisciplineId == disciplineId);

            return discipline.FirstOrDefault();
        }


        public Discipline  Update(Discipline discipline)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Discipline> r = null;
            try
            {
                if (discipline.DisciplineId== 0)
                {
                    r = _context.Discipline.Add(discipline);
                }
                else
                {
                    r = _context.Discipline.Update(discipline);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return discipline;
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