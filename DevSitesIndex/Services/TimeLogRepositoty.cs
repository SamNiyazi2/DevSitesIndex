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
            var timeLog = _context.TimeLog.Where(c => c.TimeLogId == timeLogId).Include(r=>r.discipline);

            return timeLog.FirstOrDefault();
        }


        public TimeLog Update(TimeLog timeLog)
        {
            // 04/20/2019 06:56 pm - SSN - Convert time passed by javaScript as Utc 
            timeLog.StartTime = timeLog.StartTime.ToLocalTime();


            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<TimeLog> r = null;
            try
            {

                if (timeLog.TimeLogId == 0)
                {
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

            }
            catch (Exception ex)
            {
                string message = ex.Message;
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