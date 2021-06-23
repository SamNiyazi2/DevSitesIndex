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
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using System.Text;
using SSN_GenUtil_StandardLib;
using System.Threading;


// 07/29/2018 03:31 pm - SSN - Copied

namespace DevSitesIndex.Entities
{

    // 08/12/2019 09:47 am - SSN - [20190812-0945] - [002] - Add identity
    // 06/20/2021 06:38 pm - SSN - [20210620-1053] - [004] - Add UserID to TimeLog table 
    // Add partial to accommodate adding in ASPNetUsers related entities.
    public partial class DevSitesIndexContext : DbContext
    // public class DevSitesIndexContext : IdentityDbContext
    {
        private readonly ILogger_SSN logger;


        // 02/24/2019 12:42 pm - SSN - [20190224-1247] Adding IConfiguration configuration
        public DevSitesIndexContext(DbContextOptions<DevSitesIndexContext> options, IConfiguration configuration, ILogger_SSN logger)
           : base(options)
        {
            // 02/24/2019 12:42 pm - SSN - [20190224-1247] Adding do_database_Migration
            bool do_database_Migration = false;
            bool.TryParse(configuration["Database_Migration"], out do_database_Migration);

            this.logger = logger;


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



        // 09/28/2019 02:08 pm - SSN - [20190928-1256] - [003] - Adding Entity Framework model attribute
        // Implementing SaveChanges and SaveChangesAsync

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            SaveChanges();
            return base.SaveChangesAsync(cancellationToken);
        }
        public override int SaveChanges()
        {

            ChangeTracker.DetectChanges();
            var timestamp = DateTime.Now;

            foreach (var entry in ChangeTracker.Entries().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
            {

                var type = entry.Entity.GetType();
                var properties = type.GetProperties();

                PropertyInfo property_Key = properties.FirstOrDefault(p => p.GetCustomAttributes(false).Any(a => a.GetType() == typeof(KeyAttribute)));
                PropertyInfo property_DateAdded = properties.FirstOrDefault(p => p.GetCustomAttributes(false).Any(a => a.GetType() == typeof(Entities.EFCoreShadowProperty.Models.DateAddedAttribute)));
                PropertyInfo property_DateUpdated = properties.FirstOrDefault(p => p.GetCustomAttributes(false).Any(a => a.GetType() == typeof(Entities.EFCoreShadowProperty.Models.DateUpdatedAttribute)));

                PropertyInfo property_NoDateUpdated = properties.FirstOrDefault(p => p.GetCustomAttributes(false).Any(a => a.GetType() == typeof(Entities.EFCoreShadowProperty.Models.NoDateUpdatedAttribute)));

                //object dateUpdatedPro = entry.Entity.GetType().GetCustomAttributes(typeof(Entities.EFCoreShadowProperty.Models.DateUpdatedAttribute), true).FirstOrDefault();
                // if (entry.Entity.GetType().GetCustomAttributes(typeof(EFCoreShadowProperty.Models.AuditableAttribute), true).Length > 0)
                //if (entry.Properties.Any(r => r.Metadata.Name == "LastModifiedOn"))


                if (property_DateAdded == null)
                {
                    throw new Exception($"20190928-1444 - No DateAdded attribute on {type.Name}.");
                }


                if (property_DateUpdated == null && property_NoDateUpdated == null)
                {
                    throw new Exception($"20190928-1444 - No 'DateUpdated' and not 'NoDateUpdated' attribute on {type.Name}.");
                }


                if (entry.State == EntityState.Added && property_DateAdded != null)
                {
                    entry.Property(property_DateAdded.Name).CurrentValue = timestamp;
                }

                if (entry.State == EntityState.Modified && property_DateUpdated != null)
                {
                    entry.Property(property_DateAdded.Name).IsModified = false;
                    entry.Property(property_DateUpdated.Name).CurrentValue = timestamp;
                }


            }





            bool currentSetting = ChangeTracker.AutoDetectChangesEnabled;

            // Must select "Entity"
            var entities = from e in ChangeTracker.Entries()
                           where e.State == EntityState.Added
                               || e.State == EntityState.Modified
                           select e.Entity;

            var results = new List<ValidationResult>();

            StringBuilder message2 = new StringBuilder();

            foreach (var entity in entities)
            {
                var validationContext = new ValidationContext(entity);

                if (!Validator.TryValidateObject(entity, validationContext, results, true)) // Need to set all properties, otherwise it just checks required.
                {
                    var errorsList = results.Select(r => r.ErrorMessage).ToList();

                    string message1 = (results.Select(r => r.ErrorMessage).ToList().Aggregate((message, nextMessage) => message + ", " + nextMessage + Environment.NewLine));
                    message2.AppendLine($"Unable to save changes for {entity.GetType().FullName} due to error(s): {message1}");

                }

            }


            try
            {

                if (results.Count == 0)
                {
                    return base.SaveChanges();
                }
                else
                {
                    throw new ApplicationException(message2.ToString());
                }
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException ex1)
            {
                logger.PostException(ex1, "DevDAL-20190927-1315", "Failed to save record");
                throw;
            }
            catch (Exception ex2)
            {
                logger.PostException(ex2, "DevDAL-20190927-1317", "Failed to save record");
                throw;
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


            // 12/10/2020 06:48 am - SSN - [20201210-0618] - [004] - Adding Job_LineItems table
            setup_Job_Lineitem(modelBuilder);


            setup_Timelog(modelBuilder);

            setup_Technology(modelBuilder);

            setup_DevSiteCodeReference(modelBuilder);

            setup_Job_Status(modelBuilder);


            setup_AspNetUsers(modelBuilder);
            setup_AspNetUserLogins(modelBuilder);
            setup_AspNetUserRoles(modelBuilder);
            setup_AspNetUserTokens(modelBuilder);


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
            // 10/09/2019 10:01 pm - SSN - [20191009-1302] - [010] - M09 - Reusing components with content projection

            modelBuilder.Entity<Job>(entity =>
            {

                entity.HasMany(s => s.timelogs).WithOne(s => s.job);

                entity.Property(x => x.JobTitle)
                    .IsRequired()
                    .HasMaxLength(100);

                // 05/29/2019 06:17 pm - SSN - Adding datetime2(0) DateAdded and DateUpdated
                entity.Property(p => p.DateAdded).HasColumnType("datetime2(0)");

                entity.Property(p => p.DateUpdated).HasColumnType("datetime2(0)");


                entity.HasIndex(x => new { x.ProjectID, x.JobTitle })
                    .HasName("Job_ProjectID_Title_Unique")
                    .IsUnique();

                // 04/19/2019 07:44 pm - SSN - Adding

                entity.HasMany<TimeLog>(s => s.timelogs)
                   .WithOne(g => g.job)
                   .HasForeignKey(t => t.JobId);

                // 09/16/2019 12:55 pm - SSN - [20190916-1123] - [007] - Adding job status

                entity.Property(b => b.Job_StatusID).HasDefaultValueSql("1");


                // 12/10/2020 06:28 am - SSN - [20201210-0618] - [002] - Adding Job_LineItems table

                entity.HasMany<Job_Lineitem>(s => s.job_Lineitems)
                    .WithOne(g => g.job)
                    .HasForeignKey(t => t.JobId);


                /////////////////////////////////////////////// 

                // 06/20/2021 07:44 pm - SSN - [20210620-1053] - [015] - Add UserID to TimeLog table 


                //entity.HasOne(d => d.Project)
                //    .WithMany(p => p.Jobs)
                //    .HasForeignKey(d => d.ProjectId)
                //    .OnDelete(DeleteBehavior.ClientSetNull);

                //entity.Property(e => e.JobStatusId)
                //    .HasColumnName("Job_StatusID")
                //    .HasDefaultValueSql("((1))");

                //entity.Property(e => e.LastActivityDate)
                //    .HasColumnType("datetime")
                //    .HasComputedColumnSql("(getdate())");

                // entity.Property(e => e.ProjectId).HasColumnName("ProjectID");

                //entity.Property(e => e.ProjectTitleForActivity)
                //    .IsRequired()
                //    .HasColumnName("ProjectTitle_ForActivity")
                //    .HasMaxLength(1)
                //    .IsUnicode(false)
                //    .HasComputedColumnSql("('')");

                // entity.Property(e => e.RowVersion).IsRowVersion();

                // entity.HasOne(d => d.JobStatus)
                //    .WithMany(p => p.Jobs)
                //    .HasForeignKey(d => d.JobStatusId)
                //    .OnDelete(DeleteBehavior.ClientSetNull);


                // entity.HasIndex(e => e.JobStatusId);
                // entity.Property(e => e.JobId).HasColumnName("JobID");



            });


        }

        // 12/10/2020 06:48 am - SSN - [20201210-0618] - [005] - Adding Job_LineItems table
        // Todo
        private static void setup_Job_Lineitem(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Job_Lineitem>()
                .Property(x => x.LineItem)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<Job_Lineitem>()
                .HasIndex(x => new { x.JobId, x.LineItem })
                .HasName("Job_Lineitem_JobId_LineItem_Unique")
                .IsUnique();

            modelBuilder.Entity<Job_Lineitem>()
                .Property(p => p.DateAdded)
                .HasColumnType("datetime2(0)");

            modelBuilder.Entity<Job_Lineitem>()
                .Property(p => p.DateModified)
                .HasColumnType("datetime2(0)");

            ///////////////////////////////////////////////////
            // 06/20/2021 07:05 pm - SSN - [20210620-1053] - [010] - Add UserID to TimeLog table 
            //  entity.HasKey(e => e.LineItemId);

            // entity.Property(e => e.LineItem) .IsRequired().HasMaxLength(200);

            // entity.Property(e => e.RowVersion).IsRowVersion();


            //entity.HasOne(d => d.Job)
            //    .WithMany(p => p.JobLineitems)
            //    .HasForeignKey(d => d.JobId)
            //    .OnDelete(DeleteBehavior.ClientSetNull);

        }



        // 04/19/2019 07:07 pm - SSN - Added configuration
        private static void setup_Timelog(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<TimeLog>(entity =>
           {

               entity.HasOne<Job>(s => s.job)
                   .WithMany(g => g.timelogs)
                   .HasForeignKey(s => s.JobId);


               // 12/10/2020 09:00 am - SSN - [20201210-0618] - [008] - Adding Job_LineItems table
               entity.HasOne<Job_Lineitem>(s => s.job_Lineitem)
                  .WithMany(g => g.timelogs)
                  .HasForeignKey(s => s.LineItemID);


               // 06/20/2021 10:58 am - SSN - [20210620-1053] - [002] - Add UserID to TimeLog table 
               //modelBuilder.Entity<TimeLog>()
               //                .HasOne(r=>r.FK_UserID)
               //                .WithOne( r2=>r2.)

               // 05/30/2019 11:39 am - SSN - Adding datetime2(0) DateAdded and DateModified and StartTime.
               entity.Property(p => p.DateAdded).HasColumnType("datetime2(0)");

               entity.Property(p => p.DateModified).HasColumnType("datetime2(0)");

               entity.Property(p => p.StartTime).HasColumnType("datetime2(0)");


               ///////////////////////////////////////////////////  
               // 06/20/2021 07:26 pm - SSN - [20210620-1053] - [012] - Add UserID to TimeLog table 

               entity.HasOne(d => d.job_Lineitem)
                    .WithMany(p => p.timelogs)
                    .HasForeignKey(d => d.LineItemID);


               //entity.HasOne(d => d.Discipline)
               //    .WithMany(p => p.TimeLog)
               //    .HasForeignKey(d => d.DisciplineId)
               //    .OnDelete(DeleteBehavior.ClientSetNull);



               // entity.HasIndex(e => e.DisciplineId);
               // entity.HasIndex(e => e.JobId);
               // entity.HasIndex(e => e.LineItemId);

               // entity.Property(e => e.DisciplineID).HasColumnName("DisciplineID");
               // entity.Property(e => e.FK_UserID).HasColumnName("FK_UserID");
               // entity.Property(e => e.LineItemId).HasColumnName("LineItemID");
               // entity.Property(e => e.RowVersion).IsRowVersion();

               // entity.Property(e => e.WorkDetailPostLineItem).HasColumnName("WorkDetail_PostLineItem");

               // entity.Property(e => e.WorkDetailPreLineItem).HasColumnName("WorkDetail_PreLineItem");


               // Todo-SSN - 06/23/2021 09:05 am - SSN - [20210623-0158] - [014] - Limit user access to their timesheet records

               entity.HasIndex(c => c.StartTime)
                             .IsUnique()
                             .HasName("IX_TimeLog_StartTime_Unique");


           });




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


            ///////////////////////////////////////////////////////
            // 06/20/2021 07:02 pm - SSN - [20210620-1053] - [009] - Add UserID to TimeLog table 

            // entity.HasKey(e => e.DisciplineId);
            // entity.ToTable("Disciplines", "DemoSites");
            // entity.Property(e => e.DisciplineShort) .IsRequired() .HasMaxLength(100);



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


            // 06/20/2021 06:49 pm - SSN - [20210620-1053] - [005] - Add UserID to TimeLog table 
            // For reference
            //entity.HasIndex(e => new { e.DateModified, e.DateAdded })
            //    .HasName("NonClusteredIndex-DateAdded-DateModified");



        }


        private static void setup_DevSite(ModelBuilder modelBuilder)
        {
            // 03/13/2019 11:01 am - SSN - DevSite update
            modelBuilder.Entity<DevSite>(entity =>
            {
                entity.Property(x => x.SiteTitle)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(x => x.SiteUrl).HasMaxLength(500);

                entity.Property(x => x.SolutionName).HasMaxLength(500);


                ///////////////////////////////////////////////
                // 06/20/2021 07:36 pm - SSN - [20210620-1053] - [014] - Add UserID to TimeLog table 

                // entity.Property(e => e.RowVersion).IsRowVersion();
                // entity.Property(e => e.SoftwareCodeId).HasColumnName("SoftwareCodeID");
                // entity.Property(e => e.SolutionDetails).HasColumnName("Solution_Details");

                //entity.Property(e => e.SolutionName)
                //    .IsRequired()
                //    .HasMaxLength(500);

                //entity.HasOne(d => d.SoftwareCode)
                //    .WithMany(p => p.DevSites)
                //    .HasForeignKey(d => d.SoftwareCodeId)
                //    .OnDelete(DeleteBehavior.ClientSetNull);


                // entity.HasIndex(e => e.SoftwareCodeID );

                //entity.Property(e => e.DateAdded)
                //    .HasColumnType("datetime2(0)")
                //    .HasDefaultValueSql("(getdate())"); took out

                // entity.Property(e => e.DateUpdated).HasColumnType("datetime2(0)");

                // entity.Property(e => e.ForDemoV02).HasColumnName("ForDemo_v02");

                //entity.Property(e => e.LastActivityDate)
                //    .HasColumnType("datetime2(0)")
                //    .HasComputedColumnSql("(coalesce([DateUpdated],[DateAdded]))");

            });

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
               .HasIndex(x => new { x.CompanyName })
               .HasName("Job_CompanyName_Unique")
               .IsUnique();

            /////////////////////////////////////////////
            // 06/20/2021 06:52 pm - SSN - [20210620-1053] - [006] - Add UserID to TimeLog table 

            //                entity.HasKey(e => e.CompanyId);

            // entity.Property(e => e.CompanyId).HasColumnName("CompanyID");

        }


        private static void setup_Project(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:41 am - SSN
            modelBuilder.Entity<Project>(entity =>
            {

                entity.Property(x => x.ProjectTitle)
                    .IsRequired()
                    .HasMaxLength(100);

                // 05/30/2019 11:36 am - SSN - Adding datetime2(0) DateAdded and DateUpdated
                entity.Property(p => p.DateAdded).HasColumnType("datetime2(0)");

                entity.Property(p => p.DateModified).HasColumnType("datetime2(0)");

                // 09/16/2019 09:59 am - SSN - Added
                entity.HasIndex(c => new { c.CompanyID, c.ProjectTitle })
                   .IsUnique()
                   .HasName("Project_CompanyID_ProjectTitle_IsUnique");


                ///////////////////////////////////////////////// 
                // 06/20/2021 07:30 pm - SSN - [20210620-1053] - [013] - Add UserID to TimeLog table 

                // entity.HasKey(e => e.ProjectID );


                // entity.Property(e => e.ProjectId).HasColumnName("ProjectID");
                // entity.Property(e => e.CompanyId).HasColumnName("CompanyID");

                //entity.HasOne(d => d.Company)
                //    .WithMany(p => p.Projects)
                //    .HasForeignKey(d => d.CompanyId)
                //    .OnDelete(DeleteBehavior.ClientSetNull);

            });


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


            modelBuilder.Entity<ReferenceSite>(entity =>
            {
                entity.HasIndex(c => c.SiteTitle)
                .IsUnique()
                .HasName("ReferenceSites_SiteTitle");

                entity.HasIndex(c => c.SiteURL)
                    .IsUnique()
                    .HasName("ReferenceSites_SiteURL");


                // 05/30/2019 11:43 am - SSN - Adding datetime2(0) DateAdded and DateModified
                entity.Property(p => p.DateAdded)
                   .HasColumnType("datetime2(0)");

                ///////////////////////////////////////////////
                // 06/20/2021 07:14 pm - SSN - [20210620-1053] - [011] - Add UserID to TimeLog table 

                // entity.Property(e => e.SiteTitle).IsRequired();

                // entity.Property(e => e.SiteUrl)
                //    .IsRequired()
                //    .HasColumnName("SiteURL");
            });
        }



        // 05/30/2019 12:03 pm - SSN Added
        private static void setup_Technology(ModelBuilder modelBuilder)
        {
            // 03/13/2019 10:41 am - SSN
            modelBuilder.Entity<Technology>(entity =>
            {

                entity.Property(x => x.Description)
                    .IsRequired()
                    .HasMaxLength(100);

                // 05/30/2019 11:36 am - SSN - Adding datetime2(0) DateAdded  
                entity.Property(p => p.DateAdded)
                    .HasColumnType("datetime2(0)");

                // 06/16/2021 09:52 pm - SSN - [20210613-0452] - [106] - Adding tags to DevSite
                entity.HasIndex(c => c.Description)
                    .IsUnique()
                    .HasName("Technology_Description_Unique_2153");

            });

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

            /////////////////////////////////////////////////////////////// 
            // 06/20/2021 06:55 pm - SSN - [20210620-1053] - [007] - Add UserID to TimeLog table 
            //entity.HasIndex(e => e.CodeReferenceId)
            //    .IsUnique();

            //entity.HasOne(d => d.CodeReference)
            //        .WithOne(p => p.DevSiteCodeReference)
            //        .HasForeignKey<DevSiteCodeReference>(d => d.CodeReferenceId)
            //        .OnDelete(DeleteBehavior.ClientSetNull);

            //entity.HasOne(d => d.DevSite)
            //    .WithMany(p => p.DevSiteCodeReference)
            //    .HasForeignKey(d => d.DevSiteId)
            //    .OnDelete(DeleteBehavior.ClientSetNull);

        }


        private static void setup_DevSiteTechnologies(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DevSiteTechnology>(entity =>
            {
                entity.HasIndex(e => new { e.DevSiteId, e.TechnologyId })
                   .HasName("IX_DevSiteTechnologies")
                   .IsUnique();

                entity.HasOne(d => d.DevSite)
                            .WithMany(p => p.DevSiteTechnologies)
                            .HasForeignKey(d => d.DevSiteId)
                            .HasConstraintName("FK_SiteTechnologies_DevSites");

                entity.HasOne(d => d.Technology)
                            .WithMany(p => p.DevSiteTechnologies)
                            .HasForeignKey(d => d.TechnologyId)
                            .HasConstraintName("FK_SiteTechnologies_Technologies");

                //////////////////////////////////////////////////////// 
                // 06/20/2021 06:59 pm - SSN - [20210620-1053] - [008] - Add UserID to TimeLog table 

                //                entity.Property(e => e.Id).HasColumnName("ID");
                //                entity.Property(e => e.DateAdded).HasDefaultValueSql("('0001-01-01T00:00:00.0000000')");
                //                entity.Property(e => e.DevSiteId).HasColumnName("DevSiteID");
                //
                //                entity.Property(e => e.TechnologyId).HasColumnName("TechnologyID");



            });
        }

        // 09/16/2019 11:38 am - SSN - [20190916-1123] - [003] - Adding job status

        private static void setup_Job_Status(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Job_Status>()
                .Property(x => x.Status)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Job_Status>()
           .Property(p => p.DateAdded)
           .HasColumnType("datetime2(0)");

            modelBuilder.Entity<Job_Status>()
           .HasIndex(x => new { x.Status })
           .HasName("Job_Status_Unique")
           .IsUnique();



        }





        // 06/21/2021 08:42 am - SSN - [20210620-2108] - [025] - Update TimeLog create option to use DrowndownListDirective
        private void setup_AspNetUsers(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<AspNetUsers>(entity =>
            {

                entity.ToTable("AspNetUsers", "dbo");
                entity.Property(e => e.PkUserId)
                    .HasColumnName("PK_UserID");

            });

        }


        // 06/21/2021 03:53 am - SSN - [20210620-2108] - [017] - Update TimeLog create option to use DrowndownListDirective
        private void setup_AspNetUserLogins(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<AspNetUserLogins>()
                .HasKey(x => new { x.LoginProvider, x.ProviderKey })
                .HasName("PK_AspNetUserLogins");
        }


        // 06/21/2021 04:15 am - SSN - [20210620-2108] - [020] - Update TimeLog create option to use DrowndownListDirective
        private void setup_AspNetUserRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetUserRoles>()
                .HasKey(x => new { x.UserId, x.RoleId })
                .HasName("PK_AspNetUserRoles");
        }


        // 06/21/2021 04:20 am - SSN - [20210620-2108] - [021] - Update TimeLog create option to use DrowndownListDirective
        private void setup_AspNetUserTokens(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetUserTokens>()
                .HasKey(x => new { x.UserId, x.LoginProvider, x.Name })
                .HasName("PK_AspNetUserTokens");
        }



        // 09/01/2019 12:35 pm - SSN Pluralize Company, Discipline, Job, SoftwareCode and Project.

        public DbSet<SoftwareCode> SoftwareCodes { get; set; }


        public DbSet<DevSite> DevSites => Set<DevSite>();



        public DbSet<Technology> Technologies => Set<Technology>();


        public DbSet<Company> Companies { get; set; }
        public DbSet<Job> Jobs { get; set; }

        // 12/10/2020 07:10 am - SSN - [20201210-0618] - [006] - Adding Job_LineItems table
        public DbSet<Job_Lineitem> Job_Lineitems { get; set; }

        public DbSet<Project> Projects { get; set; }
        public DbSet<ReferenceSite> ReferenceSites { get; set; }
        public DbSet<CodeReference> CodeReferences { get; set; }
        public DbSet<TimeLog> TimeLog { get; set; }
        public DbSet<Discipline> Disciplines { get; set; }

        // 09/01/2019 12:34 pm - SSN - [20190901-1225] - [002] - Add Job_DevSite table
        public DbSet<Job_DevSite> Job_DevSites { get; set; }


        // 09/16/2019 11:44 am - SSN - [20190916-1123] - [004] - Adding job status
        public DbSet<Job_Status> Job_Statuses { get; set; }


        // 06/13/2021 08:39 am - SSN - [20210613-0452] - [013] - Adding tags to DevSite
        public DbSet<DevSiteTechnology> DevSiteTechnologies => Set<DevSiteTechnology>();





        // 06/21/2021 02:40 am - SSN - [20210620-2108] - [013] - Update TimeLog create option to use DrowndownListDirective

        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<DevSiteCodeReference> DevSiteCodeReference { get; set; }




    }
}
