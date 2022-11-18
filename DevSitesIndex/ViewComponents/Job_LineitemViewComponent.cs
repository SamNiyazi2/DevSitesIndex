
// 11/17/2022 04:27 pm - SSN - [20221117-1626] - [001] - Add ViewComponent to replace display of JobLineItem (for hyperlink)

using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;
using System.Threading.Tasks;

namespace DevSitesIndex.ViewComponents
{
    public class Job_LineitemViewComponent : ViewComponent
    {
        private readonly ILogger_SSN logger;

        public Job_LineitemViewComponent(ILogger_SSN logger)
        {
            this.logger = logger;
        }

        public async Task<IViewComponentResult> InvokeAsync(Job_Lineitem model)
        {
            return View(model);
        }
    }
}
