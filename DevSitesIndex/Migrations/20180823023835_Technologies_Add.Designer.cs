﻿// <auto-generated />
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DevSitesIndex.Migrations
{
    [DbContext(typeof(DevSitesIndexContext))]
    [Migration("20180823023835_Technologies_Add")]
    partial class Technologies_Add
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("DemoSites")
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DevSitesIndex.Entities.Company", b =>
                {
                    b.Property<int>("CompanyID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CompanyName");

                    b.Property<DateTime>("DateAdded");

                    b.HasKey("CompanyID");

                    b.ToTable("Company");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.DevSite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("SiteTitle");

                    b.Property<string>("SiteUrl");

                    b.Property<int>("SoftwareCode");

                    b.Property<string>("SolutionName");

                    b.Property<string>("Solution_Details");

                    b.HasKey("Id");

                    b.ToTable("DevSites");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job", b =>
                {
                    b.Property<int>("JobID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("JobTitle");

                    b.Property<int>("ProjectID");

                    b.HasKey("JobID");

                    b.HasIndex("ProjectID");

                    b.ToTable("Job");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Project", b =>
                {
                    b.Property<int>("ProjectID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CompanyID");

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("ProjectTitle");

                    b.HasKey("ProjectID");

                    b.HasIndex("CompanyID");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Technology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("Technologies");
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Job", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Project", "project")
                        .WithMany()
                        .HasForeignKey("ProjectID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DevSitesIndex.Entities.Project", b =>
                {
                    b.HasOne("DevSitesIndex.Entities.Company", "company")
                        .WithMany()
                        .HasForeignKey("CompanyID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
