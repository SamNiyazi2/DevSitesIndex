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
    [Migration("20190901021427_Add Jobs_Index_WithLastActivityDate v02")]
    partial class AddJobs_Index_WithLastActivityDatev02
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("DemoSites")
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

                    b.HasKey("CompanyID");

                    b.ToTable("Company");
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

                    b.ToTable("Discipline");
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

                    b.Property<DateTime>("LastActivityDate")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("ProjectID");

                    b.Property<string>("ProjectTitle_ForActivity")
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("JobID");

                    b.HasIndex("ProjectID", "JobTitle")
                        .IsUnique()
                        .HasName("Job_ProjectID_Title_Unique");

                    b.ToTable("Job");
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

                    b.HasKey("ProjectID");

                    b.HasIndex("CompanyID");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.ReferenceSite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

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

                    b.ToTable("SoftwareCode");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Technology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("datetime2(0)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

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

                    b.Property<int>("JobId");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2(0)");

                    b.Property<int?>("TotalSeconds");

                    b.Property<string>("WorkDetail");

                    b.HasKey("TimeLogId");

                    b.HasIndex("DisciplineID");

                    b.HasIndex("JobId");

                    b.ToTable("TimeLog");
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

            modelBuilder.Entity("DevSitesIndex.Entities.Job", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Project", "project")
                        .WithMany()
                        .HasForeignKey("ProjectID")
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
                });
#pragma warning restore 612, 618
        }
    }
}
