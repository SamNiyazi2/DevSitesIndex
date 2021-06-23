using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DevSitesIndex.Migrations
{
    public partial class Addedaspnetuserstablesdbsettocontext : Migration
    {
        // 06/21/2021 04:21 am - SSN - [20210620-2108] - [022] - Update TimeLog create option to use DrowndownListDirective
        // Tables were added in long time ago but we never had to mess with them before needing to add a PK to associate TimeLog record with their owner.
// Comment out.

        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql(@"


GO
PRINT N'Creating [DemoSites].[FK_TimeLog_AspNetUsers]...';


GO
ALTER TABLE [DemoSites].[TimeLog] WITH NOCHECK
    ADD CONSTRAINT [FK_TimeLog_AspNetUsers] FOREIGN KEY ([FK_UserID]) REFERENCES [dbo].[AspNetUsers] ([PK_UserID]);


GO
PRINT N'Checking existing data against newly created constraints';



GO
ALTER TABLE [DemoSites].[TimeLog] WITH CHECK CHECK CONSTRAINT [FK_TimeLog_AspNetUsers];


GO
PRINT N'Update complete.';


GO


");



            //migrationBuilder.AddColumn<int>(
            //    name: "FK_UserID",
            //    schema: "DemoSites",
            //    table: "TimeLog",
            //    nullable: false,
            //    defaultValue: 0);

            //migrationBuilder.CreateTable(
            //    name: "AspNetRoles",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<string>(nullable: false),
            //        Name = table.Column<string>(nullable: true),
            //        NormalizedName = table.Column<string>(nullable: true),
            //        ConcurrencyStamp = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetRoles", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUsers",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<string>(nullable: false),
            //        UserName = table.Column<string>(nullable: true),
            //        NormalizedUserName = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        NormalizedEmail = table.Column<string>(nullable: true),
            //        EmailConfirmed = table.Column<bool>(nullable: false),
            //        PasswordHash = table.Column<string>(nullable: true),
            //        SecurityStamp = table.Column<string>(nullable: true),
            //        ConcurrencyStamp = table.Column<string>(nullable: true),
            //        PhoneNumber = table.Column<string>(nullable: true),
            //        PhoneNumberConfirmed = table.Column<bool>(nullable: false),
            //        TwoFactorEnabled = table.Column<bool>(nullable: false),
            //        LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
            //        LockoutEnabled = table.Column<bool>(nullable: false),
            //        AccessFailedCount = table.Column<int>(nullable: false),
            //        PkUserId = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUsers", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetRoleClaims",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        RoleId = table.Column<string>(nullable: true),
            //        ClaimType = table.Column<string>(nullable: true),
            //        ClaimValue = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
            //            column: x => x.RoleId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetRoles",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserClaims",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        UserId = table.Column<string>(nullable: true),
            //        ClaimType = table.Column<string>(nullable: true),
            //        ClaimValue = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_AspNetUserClaims_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserLogins",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        LoginProvider = table.Column<string>(nullable: false),
            //        ProviderKey = table.Column<string>(nullable: false),
            //        ProviderDisplayName = table.Column<string>(nullable: true),
            //        UserId = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserLogins_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserRoles",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        UserId = table.Column<string>(nullable: false),
            //        RoleId = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
            //            column: x => x.RoleId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetRoles",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_AspNetUserRoles_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "AspNetUserTokens",
            //    schema: "DemoSites",
            //    columns: table => new
            //    {
            //        UserId = table.Column<string>(nullable: false),
            //        LoginProvider = table.Column<string>(nullable: false),
            //        Name = table.Column<string>(nullable: false),
            //        Value = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
            //        table.ForeignKey(
            //            name: "FK_AspNetUserTokens_AspNetUsers_UserId",
            //            column: x => x.UserId,
            //            principalSchema: "DemoSites",
            //            principalTable: "AspNetUsers",
            //            principalColumn: "Id",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetRoleClaims_RoleId",
            //    schema: "DemoSites",
            //    table: "AspNetRoleClaims",
            //    column: "RoleId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserClaims_UserId",
            //    schema: "DemoSites",
            //    table: "AspNetUserClaims",
            //    column: "UserId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserLogins_UserId",
            //    schema: "DemoSites",
            //    table: "AspNetUserLogins",
            //    column: "UserId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_AspNetUserRoles_RoleId",
            //    schema: "DemoSites",
            //    table: "AspNetUserRoles",
            //    column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
        //    migrationBuilder.DropTable(
        //        name: "AspNetRoleClaims",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetUserClaims",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetUserLogins",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetUserRoles",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetUserTokens",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetRoles",
        //        schema: "DemoSites");

        //    migrationBuilder.DropTable(
        //        name: "AspNetUsers",
        //        schema: "DemoSites");

        //    migrationBuilder.DropColumn(
        //        name: "FK_UserID",
        //        schema: "DemoSites",
        //        table: "TimeLog");

        }
    }
}
