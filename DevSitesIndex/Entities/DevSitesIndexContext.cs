using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;

// 07/29/2018 03:31 pm - SSN - Copied

namespace DevSitesIndex.Entities
{
    public class DevSitesIndexContext : DbContext
    {
        public DevSitesIndexContext(DbContextOptions<DevSitesIndexContext> options)
           : base(options)
        {
         /////////////////////////////////   Database.Migrate(); 
        }

        // 08/07/2018 12:14 pm - SSN
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("DemoSites");
        }
        public DbSet<DevSite> DevSites { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<DevSitesIndex.Entities.Job> Job { get; set; }
        public DbSet<DevSitesIndex.Entities.Project> Project { get; set; }

    }
}
