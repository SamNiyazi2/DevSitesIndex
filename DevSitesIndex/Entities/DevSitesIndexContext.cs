using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.Extensions.Configuration;

// 07/29/2018 03:31 pm - SSN - Copied

namespace DevSitesIndex.Entities
{
    public class DevSitesIndexContext : DbContext
    {
        // 02/24/2019 12:42 pm - SSN - [20190224-1247] Adding IConfiguration configuration
        public DevSitesIndexContext(DbContextOptions<DevSitesIndexContext> options, IConfiguration configuration)
           : base(options)
        {
            // 02/24/2019 12:42 pm - SSN - [20190224-1247] Adding do_database_Migration
            bool do_database_Migration = false;
            bool.TryParse(configuration["Database_Migration"], out do_database_Migration);


            if (do_database_Migration)
            {
                // 02/24/2019 05:32 am - SSN - Reactivated

                Database.SetCommandTimeout(600);
                Database.Migrate();
            }
        }

        // 08/07/2018 12:14 pm - SSN
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("DemoSites");

            setup_ReferenceSite(modelBuilder);

            setup_Project(modelBuilder);

            setup_Company(modelBuilder);

            setup_DevSite(modelBuilder);

            setup_CodeReference(modelBuilder);

            setup_Discipline(modelBuilder);

            setup_Job(modelBuilder);

        }

        private static void setup_Job(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Job>()
                .Property(x => x.JobTitle)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Job>()
                .HasIndex(x => new { x.ProjectID, x.JobTitle })
                .HasName("Job_ProjectID_Title_Unique")
                .IsUnique();
            
        }

        private static void setup_Discipline(ModelBuilder modelBuilder)
        {
            // 04/07/2019 11:53 pm - SSN - [20190407-2345] - TimeLog

            modelBuilder.Entity<Discipline>()
                .Property(x => x.DisciplineShort)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Discipline>()
                .HasIndex(c => c.DisciplineShort)
                .IsUnique()
                .HasName("Discipline_DisciplineShort_Unique");
        }

        private static void setup_CodeReference(ModelBuilder modelBuilder)
        {
            // 03/13/2019 11:16 am - SSN - CodeReference update
            // 03/13/2019 03:36 pm - SSN - Take out
            //modelBuilder.Entity<CodeReference>()
            //    .Property(x => x.CodeBlock)
            //    .IsRequired();

            modelBuilder.Entity<CodeReference>()
                .Property(x => x.Title)
                .HasMaxLength(100);
        }

        private static void setup_DevSite(ModelBuilder modelBuilder)
        {
            // 03/13/2019 11:01 am - SSN - DevSite update
            modelBuilder.Entity<DevSite>()
                .Property(x => x.SiteTitle)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<DevSite>()
                .Property(x => x.SiteUrl)
                .HasMaxLength(500);

            modelBuilder.Entity<DevSite>()
                .Property(x => x.SolutionName)
                .HasMaxLength(500);
        }

        private static void setup_Company(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:53 am - SSN
            modelBuilder.Entity<Company>()
                .Property(x => x.CompanyName)
                .IsRequired()
                .HasMaxLength(100);
        }

        private static void setup_Project(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:41 am - SSN
            modelBuilder.Entity<Project>()
                .Property(x => x.ProjectTitle)
                .IsRequired()
                .HasMaxLength(100);
        }

        private static void setup_ReferenceSite(ModelBuilder modelBuilder)
        {
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
                .HasIndex(c => c.SiteURL)
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
        public DbSet<TimeLog> TimeLog { get; set; }
        public DbSet<DevSitesIndex.Entities.Discipline> Discipline { get; set; }

    }
}
