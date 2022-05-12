using DevSitesIndex.Entities;
using DevSitesIndex.Pages;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// 05/02/2022 09:58 pm - SSN - [20220502-1159] - [012] - Create table DevSite_Job_LineItem

namespace DevSitesIndex.Services
{
    public class DevSite_Job_LineItemRepository : IEntityRepository<DevSite_Job_LineItem>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;
        private readonly IValidationSharedUtil validationSharedUtil;
        private readonly IEntityRepository<AspNetUsers> aspNetUsersRepository;

        public DevSite_Job_LineItemRepository(DevSitesIndexContext _context, ILogger_SSN _logger, IValidationSharedUtil _validationSharedUtil)
        {
            context = _context;
            logger = _logger;
            validationSharedUtil = _validationSharedUtil;
            this.aspNetUsersRepository = new AspNetUsersRepository(context, logger);
        }
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IQueryable<DevSite_Job_LineItem> GetAll()
        {
            throw new NotImplementedException();
        }

        public DevSite_Job_LineItem GetRecord(int id)
        {
            throw new NotImplementedException();
        }


        public void Save()
        {
            context.SaveChanges();
        }


        public DevSite_Job_LineItem Update(DevSite_Job_LineItem devSite_Job_LineItem, ClaimsPrincipal user)
        {
            if (devSite_Job_LineItem.Id == 0)
            {
                devSite_Job_LineItem.DateAdded = devSite_Job_LineItem.DateAdded.ToLocalTime();
            }


            string userName = user.Identity.Name;
            string friendlyErrorMessage = "Failed to save record. ";
            string exceptionMesssage = $"demosites-devSite_Job_LineItem-20220502-2208 - Record user id mismatch [{devSite_Job_LineItem.FK_UserID }] <> [[[currentUser_PkUserId]]]  TimelogID [{devSite_Job_LineItem.Id}]";
            string callSource = "demosites-20210621-0301";

            devSite_Job_LineItem.FK_UserID = validationSharedUtil.getCurrentUser_PK_UserID(aspNetUsersRepository, userName, devSite_Job_LineItem.FK_UserID,
                friendlyErrorMessage, exceptionMesssage, callSource).GetAwaiter().GetResult();


            devSite_Job_LineItem.DevSite = null;
            devSite_Job_LineItem.Job_Lineitem = null;
            devSite_Job_LineItem.AspNetUser = null;


            if (devSite_Job_LineItem.Id == 0)
            {
                context.DevSite_Job_LineItems.Add(devSite_Job_LineItem);
            }
            else
            {
                context.Attach(devSite_Job_LineItem).State = EntityState.Modified;
            }

            return devSite_Job_LineItem;

        }
    }
}
