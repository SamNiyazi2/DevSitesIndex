using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 09/22/2022 08:54 am - SSN - Created

namespace DevSitesIndex.Controllers
{

    public class RedirectUrlController : Controller
    {

        protected readonly DevSitesIndexContext context;
        protected readonly ILogger_SSN logger;
        protected readonly RedirectUrlRepository _entityRepository;

        public RedirectUrlController(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
            _entityRepository = new RedirectUrlRepository(context, logger);
        }

        [Route("GetCurrentAddress/{id}")]
        public IActionResult GetCurrentAddress(string id)
        {
            Guid guid = Guid.NewGuid();

            RedirectUrlModel model = new RedirectUrlModel();

            if (Guid.TryParse(id, out guid))
            {
                RedirectUrl rec = _entityRepository.GetRecord(guid);
                if (rec != null && !string.IsNullOrWhiteSpace(rec.Url))
                {

                    model.HasExpired = rec.DateDisabled.HasValue;

                    if (!rec.DateDisabled.HasValue)
                    {
                        logger.TrackEvent($"DevSitesIndex-20220922-0853:  RedirectURL:   Calling RedicrectUrl [${guid}]");
                        model.Url = rec.Url;

                        model.UrlText = string.IsNullOrEmpty(rec.UrlText) ? rec.Url : rec.UrlText;
                        model.UrlDetail = rec.UrlDetail;

                        model.DisplayBookmarkMessage = true;
                    }
                    else
                    {
                        logger.TrackEvent($"DevSitesIndex-20220922-1029:  RedirectURL:   Expired record [${guid}]");
                        model.Message = "The option selected has expired.";
                        model.MessageClassName = "text-info";


                    }
                }
                else
                {
                    logger.TrackEvent($"DevSitesIndex-20220922-0916:  RedirectURL:   Blank or null URL [${guid}]");
                    model.Message = "Failed to find address selected.";
                    model.MessageClassName = "text-danger";
                }

            }
            else
            {
                logger.TrackEvent($"DevSitesIndex-20220922-0917: RedirectURL:   Invalid Guid [${id}]");
                model.Message = "The address provided is invalid.";
                model.MessageClassName = "text-danger";
            }

            return View("detail", model);


        }


    }
}
