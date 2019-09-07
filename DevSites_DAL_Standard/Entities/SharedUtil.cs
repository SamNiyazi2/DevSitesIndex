using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/08/2019 01:18 am - SSN - [20190407-2345] - TimeLog - Added

namespace DevSitesIndex.Entities
{
    public class SharedUtil
    {
        // 04/20/2019 09:25 am - SSN - [20190420-0931] - Return exception

        public static async Task<Exception> save(DevSitesIndexContext _context, IBaseEntity entity)
        {
            _context.Attach(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            _context.Entry(entity).Property(x => x.DateAdded).IsModified = false;

            try
            {
                entity.DateModified = DateTime.Now;

                await _context.SaveChangesAsync();
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException ex1)
            {
                //if (!TimeLogExists(TimeLog.TimeLogId))
                //{
                //    return NotFound();
                //}
                //else
                {
                    return ex1;
                    throw;
                }

            }
            catch (Exception ex2)
            {
                {
                    return ex2;
                    throw;
                }

            }
            return default(Exception);
        }
    }
}
