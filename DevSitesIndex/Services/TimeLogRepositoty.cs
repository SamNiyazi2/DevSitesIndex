﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Pages;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

// 04/12/2019 11:51 am - SSN - [20190412-1126] - Timelog - save data - Copied from DevSitesIndexRepository

namespace DevSitesIndex.Services
{
    public class TimeLogRepository : IEntityRepository<TimeLog>
    {
        private readonly DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;
        private readonly UserManager<IdentityUser> userManager;
        private readonly IValidationSharedUtil validationSharedUtil;

        // 09/26/2019 10:56 am - SSN - [20190926-1047] - [002] - Debugging: timelog not posting
        // Add logged to post error messages.

        // Todo-SSN - 06/23/2021 03:26 am - SSN - [20210623-0158] - [005] - Limit user access to their timesheet records
        // Added aspNetUsersRepository and IValidationSharedUtil validationSharedUtil
        private readonly IEntityRepository<AspNetUsers> aspNetUsersRepository;

        public TimeLogRepository(DevSitesIndexContext context, ILogger_SSN logger, IValidationSharedUtil validationSharedUtil)
        {
            this._context = context;
            this.logger = logger;
            this.validationSharedUtil = validationSharedUtil; 
            this.aspNetUsersRepository = new AspNetUsersRepository(context, logger);

        }


        //public IEnumerable<TimeLog> GetAll()
        public IQueryable<TimeLog> GetAll()
        {
            // 04/20/2019 11:12 am - SSN - [20190420-1109] - Add AsNoTracking to index pages
            // 10/03/2019 05:33 pm - SSN - [20191003-1557] - [008] - Adding data service to Angular7
            // Include discipline, job and project titles.
            // return _context.TimeLog.OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking().ToList();
            IQueryable<TimeLog> result = _context.TimeLog
                .Include(r => r.job).ThenInclude(r => r.project)
                .Include(r => r.job_Lineitem)
                .Include(r => r.discipline)

                // 10/21/2019 08:33 pm - SSN - [20191021-2033] - [001] - Revise timelog search returned result

                // .OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking().ToList();
                .OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking();

            return result;
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

                                            // 06/07/2021 06:35 pm - SSN - [20210606-0227] - [021] - Testng for deployment - Line item
                                            .Include(r => r.job_Lineitem)

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


        public TimeLog Update(TimeLog timeLog, System.Security.Claims.ClaimsPrincipal user)
        {

            // 06/07/2021 06:36 am - SSN - [20210606-0227] - [017] - Testng for deployment
            // Todo
            // Copied from Job_LineItemRepository.  Keep in sync.



            // 04/20/2019 06:56 pm - SSN - Convert time passed by javaScript as Utc 
            // 06/22/2021 12:54 am - SSN - [20210622-0054] - [001] - Address timezone issue (JavaScript vs MVC time)

            // Todo [20210622-0054] - [001] - Are we in the clear?

            // JavaScript fix - 
            timeLog.StartTime = timeLog.StartTime.ToLocalTime();


            string userName = user.Identity.Name;
            string friendlyErrorMessage = "Failed to save record. ";
            string exceptionMesssage = $"demosites-20210621-1417 - Timelog record user id mismatch [{timeLog.FK_UserID }] <> [[[currentUser_PkUserId]]]  TimelogID [{timeLog.TimeLogId}]";
            string callSource = "demosites-20210621-0301";

            timeLog.FK_UserID = validationSharedUtil.getCurrentUser_PK_UserID(aspNetUsersRepository, userName, timeLog.FK_UserID,
                friendlyErrorMessage, exceptionMesssage, callSource).GetAwaiter().GetResult();




            // 11/16/2019 08:33 pm - SSN - [20191116-1516] - [014] - Timelog edit (AngularJS client version)

            // Replace logic
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo 
            // Todo Todo Todo Todo Todo Todo Todo Todo



            //////////////////if (timeLog.TimeLogId == 0)
            //////////////////{

            timeLog.discipline = null;

            //////////////////    // We "include"d projects for displaying titles. We need to exclude them from inserts.
            timeLog.job = null;


            // 06/07/2021 11:40 pm - SSN - [20210606-0227] - [025] - Testng for deployment - Line item
            timeLog.job_Lineitem = null;


            //////////////////    _context.TimeLog.Add(timeLog);

            //////////////////}
            //////////////////else
            //////////////////{
            //////////////////    _context.TimeLog.Update(timeLog);
            //////////////////}

            if (timeLog.TimeLogId == 0)
            {
                _context.TimeLog.Add(timeLog);
            }
            else
            {
                _context.Attach(timeLog).State = EntityState.Modified;
            }

            return timeLog;

        }


        // 09/29/2019 09:47 am - SSN - [20190928-1256] - [014] - Adding Entity Framework model attribute
        // public bool Save()
        // 11/16/2019 08:00 pm - SSN - [20191116-1516] - [008] - Timelog edit (AngularJS client version)
        // Leave error handling to SaveChanges

        public void Save()
        {

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