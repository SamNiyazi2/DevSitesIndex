using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Areas.Identity.Pages.Account;
using DevSitesIndex.Entities;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using SSN_GenUtil_StandardLib;

// 11/05/2019 06:00 pm - SSN - [20191104-0607] - [011] - Registration - Client 


/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs
/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs
/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs
/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs
/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs
/////////////// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\AuthenticateUserAPIController.cs

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentitySupportController : Controller // ControllerBase does not give option to process called method.
    {

        // Todo-SSN: ILogger_SSN
        //   private readonly ILogger_SSN logger;
        private readonly ILogger<RegisterModel> logger;

        private readonly UserManager<IdentityUser> userManager;
        private readonly IEmailSender emailSender;
        private readonly IHostingEnvironment env;



        // Todo_SSN: Replace ILogger with ILogger_SSN - Compare

        public IdentitySupportController(ILogger<RegisterModel> logger, UserManager<IdentityUser> userManager, IEmailSender emailSender, IHostingEnvironment env)
        {
            this.logger = logger;
            this.userManager = userManager;
            this.emailSender = emailSender;
            this.env = env;
        }


        [Route("registerUser")]
        //  [HttpPost]
        public async Task<DataBag<RegisterModel.InputModel>> registerUser([FromBody] RegisterModel.InputModel inputModel)
        {
            DataBag<RegisterModel.InputModel> dataBag = new DataBag<RegisterModel.InputModel>();


            if (ModelState.IsValid)
            {
                Register_SharedCode register_SharedCode = new Register_SharedCode(userManager, logger, emailSender, env);

                Register_SharedCode.Regiseration_Result result = await register_SharedCode.createUser(this.Url, inputModel);

                foreach (var error in result.identityResult.Errors)
                {
                    if (!error.Description.ToLower().Contains("user name"))
                    {
                        dataBag.addToBagModelError(string.Empty, error.Description);
                    }
                }


                if (result.pageContent != null)
                {

                    //PageContent pageContent_final = PageContent.GetPageData(result.pageContent.PageID);
                    //dataBag.pageContent.AddTitle(pageContent_final.MessageTitle.ToString());
                    //dataBag.pageContent.AddMessage(pageContent_final.MessageBody.ToString());
                    dataBag.pageContent = PageContent.GetPageData(result.pageContent.PageID);
                }


            }
            else
            {

                foreach (KeyValuePair<string, ModelStateEntry> e in ModelState)
                {
                    foreach (ModelError me in e.Value.Errors)
                    {
                        dataBag.addToBagModelError(e.Key, me.ErrorMessage);
                    }
                }


            }



            return dataBag;
        }



        // 11/06/2019 02:29 pm - SSN - [20191104-0607] - [024] - Registration - Client 
        [Route("IsEmailOnFile")]
        [HttpPost]
        public async Task<bool> IsEmailOnFile([FromBody]  RegisterModel.InputModel inputModel)
        {
            IdentityUser identityUser = await userManager.FindByEmailAsync(inputModel.Email);
            return identityUser != null;
        }

    }
}