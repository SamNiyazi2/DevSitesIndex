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


            // 09/04/2018 09:54 am - SSN - Added HasAlternateKey then replaced with HasIndex unique.  First option caused property to be read-only.
            // modelBuilder.Entity<ReferenceSite>()
            //.HasAlternateKey(c => c.SiteTitle)
            //.HasName("ReferenceSites_SiteTitle");


            // modelBuilder.Entity<ReferenceSite>()
            //.HasAlternateKey(c => c.SiteURL)
            //.HasName("ReferenceSites_SiteURL");


            modelBuilder.Entity<ReferenceSite>()
            .HasIndex(c => c.SiteTitle)
            .IsUnique()
            .HasName("ReferenceSites_SiteTitle");

            modelBuilder.Entity<ReferenceSite>()
            .HasIndex (c => c.SiteURL)
            .IsUnique()
            .HasName("ReferenceSites_SiteURL");


        }
        public DbSet<SoftwareCode> SoftwareCode { get; set; }
        public DbSet<DevSite> DevSites { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<DevSitesIndex.Entities.Job> Job { get; set; }
        public DbSet<DevSitesIndex.Entities.Project> Project { get; set; }
        public DbSet<ReferenceSite> ReferenceSites { get; set; }
        public DbSet<CodeReference> CodeReferences { get; set; }

    }
}
