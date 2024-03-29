﻿// <auto-generated />
using System;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DevSitesIndex.Migrations
{
    [DbContext(typeof(DevSitesIndexContext))]
    [Migration("20220511023840_Add table DevSite_Job_LineItem")]
    partial class AddtableDevSite_Job_LineItem
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("DemoSites")
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetRoleClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetRoles", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedName");

                    b.HasKey("Id");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserLogins", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey")
                        .HasName("PK_AspNetUserLogins");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserRoles", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId")
                        .HasName("PK_AspNetUserRoles");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserTokens", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name")
                        .HasName("PK_AspNetUserTokens");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUsers", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<int>("PkUserId")
                        .HasColumnName("PK_UserID");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("AspNetUsers","dbo");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.CodeReference", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CodeBlock")
                        .IsRequired();

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime>("DateModified")
                        .HasColumnType("datetime2(0)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("SourceAddress");

                    b.Property<string>("Title")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("CodeReferences");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Company", b =>
                {
                    b.Property<int>("CompanyID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateUpdated");

                    b.HasKey("CompanyID");

                    b.HasIndex("CompanyName")
                        .IsUnique()
                        .HasName("Job_CompanyName_Unique");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("CanBeLaunched");

                    b.Property<DateTime>("DateAdded");

                    b.Property<DateTime?>("DateUpdated");

                    b.Property<byte>("ForDemo_v02");

                    b.Property<DateTime>("LastActivityDate")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("SiteTitle")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<string>("SiteUrl")
                        .HasMaxLength(500);

                    b.Property<int>("SoftwareCodeID");

                    b.Property<string>("SolutionName")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<string>("Solution_Details");

                    b.HasKey("Id");

                    b.HasIndex("SoftwareCodeID");

                    b.ToTable("DevSites");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSiteCodeReference", b =>
                {
                    b.Property<int>("DevSiteId");

                    b.Property<int>("CodeReferenceId");

                    b.HasKey("DevSiteId", "CodeReferenceId");

                    b.HasIndex("CodeReferenceId");

                    b.ToTable("DevSiteCodeReference");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSiteTechnology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded");

                    b.Property<int>("DevSiteId");

                    b.Property<int>("TechnologyId");

                    b.HasKey("Id");

                    b.HasIndex("DevSiteId");

                    b.HasIndex("TechnologyId");

                    b.ToTable("DevSiteTechnologies");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSite_Job_LineItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded");

                    b.Property<int>("DevSiteId");

                    b.Property<int>("FK_UserID");

                    b.Property<int>("Job_LineItemId");

                    b.HasKey("Id");

                    b.HasIndex("FK_UserID");

                    b.HasIndex("Job_LineItemId");

                    b.HasIndex("DevSiteId", "Job_LineItemId")
                        .IsUnique()
                        .HasName("IK_DevSite_Job_LineItem_Unique");

                    b.ToTable("DevSite_Job_LineItems");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Discipline", b =>
                {
                    b.Property<int>("DisciplineId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnType("datetime2(0)");

                    b.Property<string>("DisciplineShort")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("DisciplineId");

                    b.HasIndex("DisciplineShort")
                        .IsUnique()
                        .HasName("Discipline_DisciplineShort_Unique");

                    b.ToTable("Disciplines");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job", b =>
                {
                    b.Property<int>("JobID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateUpdated")
                        .HasColumnType("datetime2(0)");

                    b.Property<string>("JobTitle")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int?>("JobTotalSeconds")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("Job_StatusID")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("1");

                    b.Property<DateTime>("LastActivityDate")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("ProjectID");

                    b.Property<string>("ProjectTitle_ForActivity")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("JobID");

                    b.HasIndex("Job_StatusID");

                    b.HasIndex("ProjectID", "JobTitle")
                        .IsUnique()
                        .HasName("Job_ProjectID_Title_Unique");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job_DevSite", b =>
                {
                    b.Property<int>("Job_DevSiteId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DevSiteId");

                    b.Property<int>("JobId");

                    b.HasKey("Job_DevSiteId");

                    b.HasIndex("DevSiteId");

                    b.HasIndex("JobId");

                    b.ToTable("Job_DevSites");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job_Lineitem", b =>
                {
                    b.Property<int>("LineItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnType("datetime2(0)");

                    b.Property<int>("JobId");

                    b.Property<string>("LineItem")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("LineItemId");

                    b.HasIndex("JobId", "LineItem")
                        .IsUnique()
                        .HasName("Job_Lineitem_JobId_LineItem_Unique");

                    b.ToTable("Job_Lineitems");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job_Status", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("ID");

                    b.HasIndex("Status")
                        .IsUnique()
                        .HasName("Job_Status_Unique");

                    b.ToTable("Job_Statuses");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Project", b =>
                {
                    b.Property<int>("ProjectID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompanyID");

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnType("datetime2(0)");

                    b.Property<string>("ProjectTitle")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int?>("ProjectTotalSeconds")
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("ProjectID");

                    b.HasIndex("CompanyID", "ProjectTitle")
                        .IsUnique()
                        .HasName("Project_CompanyID_ProjectTitle_IsUnique");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.ReferenceSite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateUpdated");

                    b.Property<string>("SiteTitle")
                        .IsRequired();

                    b.Property<string>("SiteURL")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("SiteTitle")
                        .IsUnique()
                        .HasName("ReferenceSites_SiteTitle");

                    b.HasIndex("SiteURL")
                        .IsUnique()
                        .HasName("ReferenceSites_SiteURL");

                    b.ToTable("ReferenceSites");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.SoftwareCode", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("SoftwareTitle");

                    b.HasKey("ID");

                    b.ToTable("SoftwareCodes");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Technology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateModified");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("Description")
                        .IsUnique()
                        .HasName("Technology_Description_Unique_2153");

                    b.ToTable("Technologies");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.TimeLog", b =>
                {
                    b.Property<int>("TimeLogId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnType("datetime2(0)");

                    b.Property<int>("DisciplineID");

                    b.Property<int>("FK_UserID");

                    b.Property<int>("JobId");

                    b.Property<int?>("LineItemID");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2(0)");

                    b.Property<int?>("TotalSeconds");

                    b.Property<string>("WorkDetail");

                    b.Property<string>("WorkDetail_PostLineItem");

                    b.Property<string>("WorkDetail_PreLineItem");

                    b.HasKey("TimeLogId");

                    b.HasIndex("DisciplineID");

                    b.HasIndex("JobId");

                    b.HasIndex("LineItemID");

                    b.HasIndex("StartTime")
                        .IsUnique()
                        .HasName("IX_TimeLog_StartTime_Unique");

                    b.ToTable("TimeLog");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetRoleClaims", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.AspNetRoles", "Role")
                        .WithMany("AspNetRoleClaims")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserClaims", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.AspNetUsers", "User")
                        .WithMany("AspNetUserClaims")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserLogins", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.AspNetUsers", "User")
                        .WithMany("AspNetUserLogins")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserRoles", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.AspNetRoles", "Role")
                        .WithMany("AspNetUserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.AspNetUsers", "User")
                        .WithMany("AspNetUserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.AspNetUserTokens", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.AspNetUsers", "User")
                        .WithMany("AspNetUserTokens")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSite", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.SoftwareCode", "SoftwareCode")
                        .WithMany()
                        .HasForeignKey("SoftwareCodeID")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSiteCodeReference", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.CodeReference", "CodeReference")
                        .WithMany("DevSiteCodeReferences")
                        .HasForeignKey("CodeReferenceId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.DevSite", "DevSite")
                        .WithMany("DevSiteCodeReferences")
                        .HasForeignKey("DevSiteId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSiteTechnology", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.DevSite", "DevSite")
                        .WithMany("DevSiteTechnologies")
                        .HasForeignKey("DevSiteId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Technology", "Technology")
                        .WithMany("DevSiteTechnologies")
                        .HasForeignKey("TechnologyId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSite_Job_LineItem", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.DevSite", "DevSite")
                        .WithMany("DevSite_Job_LineItems")
                        .HasForeignKey("DevSiteId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.AspNetUsers", "AspNetUser")
                        .WithMany()
                        .HasForeignKey("FK_UserID")
                        .HasPrincipalKey("PkUserId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Job_Lineitem", "Job_Lineitem")
                        .WithMany("DevSite_Job_LineItems")
                        .HasForeignKey("Job_LineItemId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Job_Status", "job_Status")
                        .WithMany()
                        .HasForeignKey("Job_StatusID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Project", "project")
                        .WithMany("jobs")
                        .HasForeignKey("ProjectID")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job_DevSite", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.DevSite", "DevSite")
                        .WithMany("JobDevSites")
                        .HasForeignKey("DevSiteId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Job", "Job")
                        .WithMany()
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job_Lineitem", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Job", "job")
                        .WithMany("job_Lineitems")
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Project", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Company", "company")
                        .WithMany()
                        .HasForeignKey("CompanyID")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.TimeLog", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Discipline", "discipline")
                        .WithMany()
                        .HasForeignKey("DisciplineID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Job", "job")
                        .WithMany("timelogs")
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DevSitesIndex.Entities.Job_Lineitem", "job_Lineitem")
                        .WithMany("timelogs")
                        .HasForeignKey("LineItemID");
                });
#pragma warning restore 612, 618
        }
    }
}
