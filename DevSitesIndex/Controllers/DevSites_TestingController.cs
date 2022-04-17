using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Controllers
{
    [Produces("application/json")]
    [Route("api/DevSites_Testing")]
    public class DevSites_TestingController : Controller
    {
        private readonly DevSitesIndexContext _context;

        public DevSites_TestingController(DevSitesIndexContext context)
        {
            _context = context;
        }

        // GET: api/DevSites_Testing
        [HttpGet]
        public IEnumerable<DevSite> GetDevSites()
        {
            return _context.DevSites;
        }

        // GET: api/DevSites_Testing/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDevSite([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var devSite = await _context.DevSites.SingleOrDefaultAsync(m => m.Id == id);

            if (devSite == null)
            {
                return NotFound("Failed to find record.");
            }

            return Ok(devSite);
        }

        // 04/13/2022 07:43 am - SSN - Add authorize
        [Authorize]
        // PUT: api/DevSites_Testing/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDevSite([FromRoute] int id, [FromBody] DevSite devSite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != devSite.Id)
            {
                return BadRequest("Mismatched ID");
            }

            try
            {

                devSite.DateUpdated = DateTime.Now;

                _context.Entry(devSite).State = EntityState.Modified;
                _context.Entry(devSite).Property(p => p.DateAdded).IsModified = false;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DevSiteExists(id))
                    {
                        return NotFound("Record not found or it was deleted.");
                    }
                    else
                    {
                        // throw;
                        return BadRequest("DemoSite-20190518-1629 - Record was updated by someone else. (Pending work)");

                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;

                return BadRequest(string.Format("['DemoSite-20190518-1630 - Systme error. (Pending work)','{0}']", message));
                // throw;
            }

            // 03/28/2019 04:15 pm - SSN - Possbly address the error:
            //                        XML Parsing Error: no root element found
            //return NoContent();

            return Ok(devSite);
        }

        // POST: api/DevSites_Testing
        // 04/13/2022 07:43 am - SSN - Add authorize
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostDevSite([FromBody] DevSite devSite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.DevSites.Add(devSite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDevSite", new { id = devSite.Id }, devSite);
        }

        // DELETE: api/DevSites_Testing/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDevSite([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var devSite = await _context.DevSites.SingleOrDefaultAsync(m => m.Id == id);
            if (devSite == null)
            {
                return NotFound("Failed to find record.");
            }

            _context.DevSites.Remove(devSite);
            await _context.SaveChangesAsync();

            return Ok(devSite);
        }

        private bool DevSiteExists(int id)
        {
            return _context.DevSites.Any(e => e.Id == id);
        }
    }
}