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


        public IQueryable<Discipline> GetAll()
        {
            // 04/20/2019 11:09 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            return _context.Disciplines.OrderBy(r => r.DisciplineShort).AsNoTracking();
        }


        public Discipline GetRecord(int disciplineId)
        {
            var discipline = _context.Disciplines.Where(c => c.DisciplineId == disciplineId);

            return discipline.FirstOrDefault();
        }


        public Discipline Update(Discipline discipline, System.Security.Claims.ClaimsPrincipal user)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Discipline> r = null;
            try
            {
                if (discipline.DisciplineId == 0)
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

        // 11/16/2019 08:05 pm - SSN - [20191116-1516] - [011] - Timelog edit (AngularJS client version)
        // Leave exeption handling to SaveChanges

        public void Save()
        {
            //return _context.SaveChanges() > 0;
            _context.SaveChanges();

        }


        public void Delete(int id)
        {
            throw new NotImplementedException();
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