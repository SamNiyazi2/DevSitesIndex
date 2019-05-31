using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;

// 04/12/2019 11:51 am - SSN - [20190412-1126] - Timelog - save data - Copied from DevSitesIndexRepository

namespace DevSitesIndex.Services
{
    public class TimeLogRepository : IEntityRepository<TimeLog>
    {
        private readonly DevSitesIndexContext _context;

        public TimeLogRepository(DevSitesIndexContext context)
        {
            this._context = context;
        }


        public IEnumerable<TimeLog> GetAll()
        {
            // 04/20/2019 11:12 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            return _context.TimeLog.OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking().ToList();
        }


        public TimeLog GetRecord(int timeLogId)
        {
            // 05/19/2019 03:31 pm - SSN - [20190519-1412] - [007] - Continue work on adding continue option for timesheet record
            // Debugging
            try
            {
                var timeLog = _context.TimeLog.Where(c => c.TimeLogId == timeLogId).Include(r => r.discipline).FirstOrDefault();

                return timeLog;

            }
            catch (Exception ex)
            {
                string errorMessage = ex.Message;
                throw;
            }
        }


        public TimeLog Update(TimeLog timeLog)
        {


            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<TimeLog> r = null;
            
            // 05/21/2019 10:35 am - SSN - Take out try/catch block

            // 04/20/2019 06:56 pm - SSN - Convert time passed by javaScript as Utc 
            timeLog.StartTime = timeLog.StartTime.ToLocalTime();

            if (timeLog.TimeLogId == 0)
            {
                int DisciplineID = timeLog.DisciplineID;
                timeLog.discipline = null;

                timeLog.DateAdded = DateTime.Now;
                r = _context.TimeLog.Add(timeLog);
            }
            else
            {
                _context.Entry(timeLog).State = EntityState.Modified;
                _context.Entry(timeLog).Property(p => p.DateAdded).IsModified = false;
                timeLog.DateModified = DateTime.Now;
                r = _context.TimeLog.Update(timeLog);
            }



            return timeLog;
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