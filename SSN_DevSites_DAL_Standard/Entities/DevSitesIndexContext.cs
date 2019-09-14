using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.ApplicationInsights;


// 07/29/2018 03:31 pm - SSN - Copied

namespace DevSitesIndex.Entities
{

    // 08/12/2019 09:47 am - SSN - [20190812-0945] - [002] - Add identity
    public class DevSitesIndexContext : DbContext
    // public class DevSitesIndexContext : IdentityDbContext
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
                // 05/31/2019 01:13 am - SSN - from 600 to 6000

                // 05/31/2019 03:22 pm - SSN - In case we have a problem with the databsae
                try
                {
                    Database.SetCommandTimeout(6000);
                    Database.Migrate();
                }
                catch (Exception ex)
                {
                    // 08/28/2019 08:35 am - SSN - [20190828-0819] - [003] - Adding Application Insights
                    TelemetryClient telemetry = new TelemetryClient();

                    try
                    {
                        Dictionary<string, string> dic = new Dictionary<string, string>();
                        dic.Add("ErrorCode", "DemoSite-20190828-0837");
                        dic.Add("ErrorMessage", "DevSiteIndexContext Migration failed");

                        telemetry.TrackException(ex, dic);
                    }
                    catch (Exception)
                    {
                        // Do nothing
                    }
                }
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

            setup_Timelog(modelBuilder);

            setup_Technology(modelBuilder);

            setup_DevSiteCodeReference(modelBuilder);

            DisableGlobalCascadeDelete(modelBuilder);
        }


        // 08/22/2019 02:56 pm - SSN
        // https://stackoverflow.com/questions/46526230/disable-cascade-delete-on-ef-core-2-globally

        private static void DisableGlobalCascadeDelete(ModelBuilder modelBuilder)
        {
            var cascadeFKs = modelBuilder.Model.GetEntityTypes()
                .SelectMany(t => t.GetForeignKeys())
                .Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade);

            foreach (var fk in cascadeFKs)
                fk.DeleteBehavior = DeleteBehavior.Restrict;
        }

        private static void setup_Job(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Job>()
                .Property(x => x.JobTitle)
                .IsRequired()
                .HasMaxLength(100);

            // 05/29/2019 06:17 pm - SSN - Adding datetime2(0) DateAdded and DateUpdated
            modelBuilder.Entity<Job>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<Job>()
           .Property(p => p.DateUpdated)
           .HasColumnType("datetime2(0)");


            modelBuilder.Entity<Job>()
                .HasIndex(x => new { x.ProjectID, x.JobTitle })
                .HasName("Job_ProjectID_Title_Unique")
                .IsUnique();

            // 04/19/2019 07:44 pm - SSN - Adding

            modelBuilder.Entity<Job>()
               .HasMany<TimeLog>(s => s.timelogs)
               .WithOne(g => g.job)
               .HasForeignKey(t => t.JobId);

        }


        // 04/19/2019 07:07 pm - SSN - Added configuration
        private static void setup_Timelog(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TimeLog>()
                .HasOne<Job>(s => s.job)
                .WithMany(g => g.timelogs)
                .HasForeignKey(s => s.JobId);


            // 05/30/2019 11:39 am - SSN - Adding datetime2(0) DateAdded and DateModified and StartTime.
            modelBuilder.Entity<TimeLog>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<TimeLog>()
           .Property(p => p.DateModified)
           .HasColumnType("datetime2(0)");


            modelBuilder.Entity<TimeLog>()
           .Property(p => p.StartTime)
           .HasColumnType("datetime2(0)");

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

            // 05/30/2019 11:41 am - SSN - Adding datetime2(0) DateAdded and DateModified
            modelBuilder.Entity<Discipline>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<Discipline>()
           .Property(p => p.DateModified)
           .HasColumnType("datetime2(0)");


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



            // 05/30/2019 11:42 am - SSN - Adding datetime2(0) DateAdded and DateModified
            modelBuilder.Entity<CodeReference>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<CodeReference>()
           .Property(p => p.DateModified)
           .HasColumnType("datetime2(0)");


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

            // 05/30/2019 11:39 am - SSN - Adding datetime2(0) DateAdded 
            modelBuilder.Entity<Company>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            // 09/13/2019 11:35 pm - SSN - Added unique
            modelBuilder.Entity<Company>()
           .HasIndex(x => new { x.CompanyName})
           .HasName("Job_CompanyName_Unique")
           .IsUnique();


        }


        private static void setup_Project(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:41 am - SSN
            modelBuilder.Entity<Project>()
                .Property(x => x.ProjectTitle)
                .IsRequired()
                .HasMaxLength(100);

            // 05/30/2019 11:36 am - SSN - Adding datetime2(0) DateAdded and DateUpdated
            modelBuilder.Entity<Project>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<Project>()
           .Property(p => p.DateModified)
           .HasColumnType("datetime2(0)");


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


            // 05/30/2019 11:43 am - SSN - Adding datetime2(0) DateAdded and DateModified
            modelBuilder.Entity<ReferenceSite>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");


        }



        // 05/30/2019 12:03 pm - SSN Added
        private static void setup_Technology(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:41 am - SSN
            modelBuilder.Entity<Technology>()
                .Property(x => x.Description)
                .IsRequired()
                .HasMaxLength(100);

            // 05/30/2019 11:36 am - SSN - Adding datetime2(0) DateAdded  
            modelBuilder.Entity<Technology>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");



        }


        // 05/30/2019 05:06 pm - SSN - [20190530-0510] 
        private static void setup_DevSiteCodeReference(ModelBuilder modelBuilder)
        {
            // https://www.learnentityframeworkcore.com/configuration/many-to-many-relationship-configuration
            modelBuilder.Entity<DevSiteCodeReference>()
                .HasKey(bc => new { bc.DevSiteId, bc.CodeReferenceId });


            modelBuilder.Entity<DevSiteCodeReference>()
               .HasOne(b => b.CodeReference)
               .WithMany(c => c.DevSiteCodeReferences)
               .HasForeignKey(fk => fk.CodeReferenceId);

            modelBuilder.Entity<DevSiteCodeReference>()
               .HasOne(b => b.DevSite)
               .WithMany(c => c.DevSiteCodeReferences)
               .HasForeignKey(fk => fk.DevSiteId);

        }

        // 09/01/2019 12:35 pm - SSN Pluralize Company, Discipline, Job, SoftwareCode and Project.

        public DbSet<SoftwareCode> SoftwareCodes { get; set; }
        public DbSet<DevSite> DevSites { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ReferenceSite> ReferenceSites { get; set; }
        public DbSet<CodeReference> CodeReferences { get; set; }
        public DbSet<TimeLog> TimeLog { get; set; }
        public DbSet<Discipline> Disciplines { get; set; }

        // 09/01/2019 12:34 pm - SSN - [20190901-1225] - [002] - Add Job_DevSite table
        public DbSet<Job_DevSite> Job_DevSites { get; set; }

    }
}
