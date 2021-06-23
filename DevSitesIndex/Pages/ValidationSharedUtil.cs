using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Pages
{
    public interface IValidationSharedUtil
    {
        Task<int> getCurrentUser_PK_UserID(IEntityRepository<AspNetUsers> aspNetUsersRepository,
            string userName,
            int record_FK_UserID,
            string friendlyErrorMessage, string exceptionMesssage, string callSource);

        void RemoveErrorsForValidFields(TimeLog timeLog, ModelStateDictionary modelState);
    }

    public class ValidationSharedUtil : IValidationSharedUtil
    {

        private readonly ILogger_SSN logger;
        private readonly IEntityRepository<AspNetUsers> aspNetUsersRepository;
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;



        //public  ValidationSharedUtil()
        //  {

        //  }

        public ValidationSharedUtil(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger)
        {
            _context = context;
            this.logger = logger;

            this.aspNetUsersRepository = new AspNetUsersRepository(context, logger);

        }



        public async Task<int> getCurrentUser_PK_UserID(
            IEntityRepository<AspNetUsers> aspNetUsersRepository,
            string userName,
            int record_FK_UserID,
            string friendlyErrorMessage, string exceptionMesssage, string callSource)
        {
            AspNetUsers currentUser = aspNetUsersRepository.GetAll().Where(r => r.UserName == userName).FirstOrDefault();

            if (record_FK_UserID != 0 && record_FK_UserID != currentUser.PkUserId)
            {
                exceptionMesssage = exceptionMesssage.Replace("[[[currentUser_PkUserId]]]", record_FK_UserID.ToString());

                await logger.PostException(new Exception(exceptionMesssage), callSource, friendlyErrorMessage);
                throw new Exception(friendlyErrorMessage);
            }

            return currentUser.PkUserId;
        }



        public void RemoveErrorsForValidFields(TimeLog timeLog, ModelStateDictionary modelState)
        {
            List<string> dropList = new List<string>();

            if (timeLog.job.ProjectID > 0)
            { dropList.Add(".job.project."); }
            if (timeLog.JobId > 0)
            { dropList.Add(".job."); }
            if (timeLog.LineItemID > 0)
            { dropList.Add(".job_lineitem."); }
            if (timeLog.DisciplineID > 0)
            { dropList.Add(".discipline."); }

            List<string> keysToRemove = modelState.Keys.Where(r => dropList.Any(r2 => r.ToLower().Contains(r2))).ToList();

            foreach (string key in keysToRemove)
            {
                modelState.Remove(key);
            }
        }


    }



    // 06/22/2021 05:40 am - SSN 
    /// <summary>
    /// Adds messages from passed in exception to the model errors.
    /// </summary>
    public static class ModelStateExtensions
    {
        public static void AddExceptions(this ModelStateDictionary modelState, Exception exception)
        {
            List<string> uniqueMessages = new List<string>();

            uniqueMessages.Add(exception.Message);

            Exception innerException = exception.InnerException;
            while (innerException != null)
            {
                if (!uniqueMessages.Contains(innerException.Message))
                {
                    uniqueMessages.Add(innerException.Message);
                }
                innerException = innerException.InnerException;
            }

            uniqueMessages.ForEach(message => modelState.AddModelError("", message));

        }
    }


}
