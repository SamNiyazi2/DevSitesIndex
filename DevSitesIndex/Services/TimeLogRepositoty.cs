using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Util;
using Microsoft.EntityFrameworkCore;

// 04/12/2019 11:51 am - SSN - [20190412-1126] - Timelog - save data - Copied from DevSitesIndexRepository

namespace DevSitesIndex.Services
{
    public class TimeLogRepository : IEntityRepository<TimeLog>
    {
        private readonly DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;

        // 09/26/2019 10:56 am - SSN - [20190926-1047] - [002] - Debugging: timelog not posting
        // Add logged to post error messages.

        public TimeLogRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this._context = context;
            this.logger = logger;
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
                // 09/24/2019 06:26 am - SSN - [20190924-0401] - [008] - Quick timelog entry
                // include job and project.
                var timeLog = _context.TimeLog
                                            .Where(c => c.TimeLogId == timeLogId)
                                            .Include(r => r.discipline)
                                            .Include(r => r.job).ThenInclude(r => r.project)
                                            .FirstOrDefault();

                return timeLog;

            }
            catch (Exception ex)
            {
                // 09/26/2019 11:01 am - SSN - [20190926-1047] - [003] - Debugging: timelog not posting
                 
                logger.PostException(ex, "20190926-1057", $"Failed to get timelog record {timeLogId}");
                throw;
            }
        }


        public TimeLog Update(TimeLog timeLog)
        {

            // 09/28/2019 03:48 pm - SSN - [20190928-1256] - [008] - Adding Entity Framework model attribute
            //////////////////////////////////////////
           Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<TimeLog> r = null;

            // 05/21/2019 10:35 am - SSN - Take out try/catch block

            // 04/20/2019 06:56 pm - SSN - Convert time passed by javaScript as Utc 
            timeLog.StartTime = timeLog.StartTime.ToLocalTime();

            if (timeLog.TimeLogId == 0)
            {
                int DisciplineID = timeLog.DisciplineID;
                timeLog.discipline = null;

                // We "include"d projects for displaying titles. We need to exclude them from inserts.
                timeLog.job = null;


                timeLog.DateAdded = DateTime.Now;
                r = _context.TimeLog.Add(timeLog);


            }
            else
            {
                _context.Entry(timeLog).State = EntityState.Modified;
                //////////////////////////////////////////    _context.Entry(timeLog).Property(p => p.DateAdded).IsModified = false;
                //////////////////////////////////////////timeLog.DateModified = DateTime.Now;
                r = _context.TimeLog.Update(timeLog);
            }
             
            return timeLog;
        }


        // 09/29/2019 09:47 am - SSN - [20190928-1256] - [014] - Adding Entity Framework model attribute
        // public bool Save()
        public Exception Save()
        {
            try
            {
                if (_context.SaveChanges() > 0)
                    return default(Exception);
                else
                    return new Exception("20190929-0948 - Failed to save record.");
            }
            catch (Exception ex)
            {

                // 09/26/2019 11:01 am - SSN - [20190926-1047] - [004] - Debugging: timelog not posting

                logger.PostException(ex, "20190926-1059", "Failed to save timelog record");

                // 09/29/2019 09:48 am - SSN - [20190928-1256] - [015] - Adding Entity Framework model attribute
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