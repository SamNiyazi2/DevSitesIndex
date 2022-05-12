using DevSitesIndex.Entities;
using DevSitesIndex.Filters;
using DevSitesIndex.Pages;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

// 05/02/2022 03:52 pm - SSN - [20220502-1159] - [009] - Create table DevSite_Job_LineItem

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class DevSite_Job_LineItemAPIController : EntityAPIController<DevSite_Job_LineItem>  //ControllerBase
    {
        public DevSite_Job_LineItemAPIController(Entities.DevSitesIndexContext context, ILogger_SSN logger, IValidationSharedUtil validationSharedUtil) : base(context, logger)
        {
            _entityRepository = new DevSite_Job_LineItemRepository(context, logger, validationSharedUtil);
        }


        [CustomAuthorizeAPI]
        [HttpPost]
        public new ActionResult Post([FromBody] DevSite_Job_LineItem value)
        {
            if (value == null)
            {
                return BadRequest("Passing a null object (DevSites-API-20220510-2148)");
            }
            DevSite_Job_LineItem duplicateRecord = context.DevSite_Job_LineItems.FirstOrDefault(r => r.DevSiteId == value.DevSiteId && r.Job_LineItemId == value.Job_LineItemId);

            if (duplicateRecord != null)
            {
                return BadRequest("Duplicate record (20220510-2014-API)");
            }

            value.AspNetUser = null;
            value.DevSite = null;
            value.Job_Lineitem = null;

            var returnedResults = base.Post(value);
            Type returnedResultsType = returnedResults.GetType();

            if (returnedResultsType.Equals(typeof(OkObjectResult)))
            {
                OkObjectResult returnedOK = returnedResults as OkObjectResult;
                DevSite_Job_LineItem rec = returnedOK.Value as DevSite_Job_LineItem;

                return Ok(context.DevSite_Job_LineItems.FirstOrDefault(r => r.Id == rec.Id));

            }
            else if (returnedResultsType.Equals(typeof(BadRequestObjectResult)))
            {
                BadRequestObjectResult badRequest = returnedResults as BadRequestObjectResult;
                return BadRequest(badRequest.Value);
            }
            else
            {
                return BadRequest($"devsite-20220510-2016: No case for response type {returnedResultsType}");
            }

        }




        // 05/11/2022 01:06 pm - SSN
        [Route("TimelogRecords/{devSiteId}")]
        [HttpGet]
        public IEnumerable<DevSite_Job_LineItem> getTimelogRecord(int devSiteId)
        {
            return context.DevSite_Job_LineItems.Where(r => r.DevSiteId == devSiteId).Include(r => r.Job_Lineitem.job);

        }



        // 05/11/2022 01:06 pm - SSN
        [Route("TimelogRecords/{id}")]
        [HttpDelete]
        [CustomAuthorizeAPI]
        async public Task<ActionResult> DeleteTimelogRecord(int id)
        {
            DevSite_Job_LineItem record = context.DevSite_Job_LineItems.FirstOrDefault(r => r.Id == id);
            if (record == null)
            {
                return NotFound();
            }
            context.DevSite_Job_LineItems.Remove(record);
            try
            {
                await context.SaveChangesAsync();

                Dictionary<string, string> dic2 = new Dictionary<string, string>();

                dic2.Add("MethodCode", "DemoSite-20220511-2302");
                dic2.Add("MethodMessage", $"DevSite_Job_LineItemAPI record deleted OK ${id}");

                return Ok(dic2);
            }
            catch (Exception ex)
            {
                Dictionary<string, string> dic2 = new Dictionary<string, string>();

                dic2.Add("ErrorCode", "DemoSite-20220511-1634");
                dic2.Add("ErrorMessage", $"DevSite_Job_LineItemAPI error deleting record ${id}");
                dic2.Add("Message", ex.Message);

                string jsonErrorMessage = JsonSerializer.Serialize(dic2);
                return BadRequest(jsonErrorMessage);
            }

        }


    }

}




