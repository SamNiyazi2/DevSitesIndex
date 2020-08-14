using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Util
{


    // 09/17/2019 08:04 am - SSN - [20190916-1123] - [020] - Adding job status

    public class FeedbackMessage
    {
        public string Key { get; set; }
        public List<string> ErrorMessages { get; set; } = new List<string>();

    }



    public class DataBag<T>
    {
        

        // 11/06/2019 04:31 pm - SSN - [20191104-0607] - [026] - Registration - Client 
        // Use to display feedback to user after submitting a form.
        
        public PageContent pageContent { get; set; } = new PageContent();
        

        public IEnumerable<T> dataList { get; set; }
        public T dataItem { get; set; }

        public SqlStatsRecord sqlStatsRecord { get; set; }


        // 11/06/2019 10:07 am - SSN - [20191104-0607] - [022] - Registration - Client 
        public List<FeedbackMessage> FeedbackMessages { get; set; } = new List<FeedbackMessage>();


        public void addToBagModelError(string key, string errorMessage)
        {

            if (FeedbackMessages == null) FeedbackMessages = new List<FeedbackMessage>();
            FeedbackMessage fbm = FeedbackMessages.FirstOrDefault(r => r.Key == key);
            if (fbm == null)
            {
                fbm = new FeedbackMessage { Key = key };
                FeedbackMessages.Add(fbm);
            }
            fbm.ErrorMessages.Add(errorMessage);

        }



        public bool hasErrors => FeedbackMessages != null && FeedbackMessages.Count > 0;


        public void copyFromBagModelError(ModelStateDictionary pageModelState)
        {
            if (FeedbackMessages == null) return;

            foreach (FeedbackMessage e in FeedbackMessages)
            {
                string key = e.Key;

                foreach (string message in e.ErrorMessages)
                {
                    pageModelState.AddModelError(e.Key, message);
                }

            }

        }

        internal void copyToBagModelError(ModelStateDictionary modelState)
        {

            foreach (KeyValuePair<string, ModelStateEntry> e in modelState)
            {
                foreach (ModelError me in e.Value.Errors)
                {
                    addToBagModelError(e.Key, me.ErrorMessage);
                }
            }
        }

    }




}
