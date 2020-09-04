using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;


// 09/04/2020 05:40 am - SSN - [20200904-0540] - [001] - Ading save-and-stay option to codereference

// Only the put option is being used.  The rest was not tested. Copied from DevSites_TestingController.


namespace DevSitesIndex.Controllers
{
    [Produces("application/json")]
    [Route("api/CodeReference_temp")]
    public class CodeReference_tempController : Controller
    {
        private readonly DevSitesIndexContext _context;

        public CodeReference_tempController(DevSitesIndexContext context)
        {
            _context = context;
        }

        // GET: api/CodeReference_temp
        [HttpGet]
        public IEnumerable<CodeReference> GetCodeReferences()
        {
            return _context.CodeReferences;
        }

        // GET: api/CodeReference_temp/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCodeReference([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var codeReference = await _context.CodeReferences.SingleOrDefaultAsync(m => m.Id == id);

            if (codeReference == null)
            {
                return NotFound("Failed to find record.");
            }

            return Ok(codeReference);
        }

        // PUT: api/CodeReference_temp/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCodeReference([FromRoute] int id, [FromBody] CodeReference codeReference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != codeReference.Id)
            {
                return BadRequest("Mismatched ID");
            }

            try
            {

                codeReference.DateModified = DateTime.Now;

                _context.Entry(codeReference).State = EntityState.Modified;
                _context.Entry(codeReference).Property(p => p.DateAdded).IsModified = false;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CodeReferenceExists(id))
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



            return Ok(codeReference);
        }

        // POST: api/CodeReference_temp
        [HttpPost]
        public async Task<IActionResult> PostCodeReference([FromBody] CodeReference codeReference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CodeReferences.Add(codeReference);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCodeReference", new { id = codeReference.Id }, codeReference);
        }

        // DELETE: api/CodeReference_temp/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCodeReference([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var codeReference = await _context.CodeReferences.SingleOrDefaultAsync(m => m.Id == id);
            if (codeReference == null)
            {
                return NotFound("Failed to find record.");
            }

            _context.CodeReferences.Remove(codeReference);
            await _context.SaveChangesAsync();

            return Ok(codeReference);
        }

        private bool CodeReferenceExists(int id)
        {
            return _context.CodeReferences.Any(e => e.Id == id);
        }
    }
}