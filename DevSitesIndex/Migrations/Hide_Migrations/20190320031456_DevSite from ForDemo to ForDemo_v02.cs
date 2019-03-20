using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DevSitesIndex.Migrations
{
    public partial class DevSitefromForDemotoForDemo_v02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ForDemo",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AddColumn<byte>(
                name: "ForDemo_v02",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                defaultValue: (byte)0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ForDemo_v02",
                schema: "DemoSites",
                table: "DevSites");

            migrationBuilder.AddColumn<bool>(
                name: "ForDemo",
                schema: "DemoSites",
                table: "DevSites",
                nullable: false,
                defaultValue: false);
        }
    }
}
