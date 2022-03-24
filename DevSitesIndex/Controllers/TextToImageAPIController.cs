using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// 03/24/2022 06:35 am - SSN 

namespace DevSitesIndex.Controllers
{
    [Route("toi")]
    [ApiController]
    public class TextToImageAPIController : ControllerBase
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logge;

        public TextToImageAPIController(DevSitesIndexContext context, ILogger_SSN logge)
        {
            this.context = context;
            this.logge = logge;
        }


        class DicRec
        {
            public MemoryStream ms_ { get; set; }
            public DateTime posted { get; set; } = DateTime.Now;

            public bool Expired
            {
                get
                {
                    return DateTime.Now > posted.AddSeconds(60);
                }
            }
        }

        static ConcurrentDictionary<string, DicRec> dic = new System.Collections.Concurrent.ConcurrentDictionary<string, DicRec>();

        // GET: api/<TextToImageAPIController>
        [HttpGet("jobs/{id}/TotalHours")]
        public FileContentResult Get(string id)
        {

            MemoryStream ms = null;
            string contentType = "text/html";

            id = (id ?? "").Trim();

            dic.TryGetValue(id, out DicRec dicRec);


            if (dicRec == null || dicRec.Expired)
            {
                ms = new MemoryStream();

                if (int.TryParse(id, out int jobId))
                {
                    Job job = context.Jobs.Where(j => j.JobID == jobId).FirstOrDefault();

                    if (job != null)
                    {
                        contentType = "image/bmp";
                        SSN_TextToImageLib.Drawings.GenerateImageFromText util = new SSN_TextToImageLib.Drawings.GenerateImageFromText();
                        ms = util.GenerateDrawingFromText_AsStream(string.Format("Timelog: {0}", job.JobTotalHours));
                    }
                }

                if (dicRec == null)
                {
                    dicRec = new DicRec { ms_ = ms };
                    dic.TryAdd(id, dicRec);
                }
                else
                {
                    dicRec.posted = DateTime.Now;
                }

            }
            else
            {
                //ms = dicRec.ms_array;
                contentType = "image/bmp";
                ms = dicRec.ms_;
            }


            byte[] bytes = ms.ToArray();

            return new FileContentResult(bytes, contentType);
        }


    }
}
