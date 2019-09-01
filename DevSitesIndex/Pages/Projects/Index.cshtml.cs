using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;


namespace DevSitesIndex.Pages.Projects
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        // 08/26/2019 11:08 am - SSN - [20190826-1108] - [001] - Add paging and sort
        // https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/sort-filter-page?view=aspnetcore-2.2


        public PaginatedList<Project> Project { get; set; }
        public HeaderWithSortLinks headerWithSortLinks { get; set; }
        public TablePager tablePager { get; set; }



        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {

            sortOrder = sortOrder ?? "ProjectTitle";
            desc = desc ?? "false";


            // 04/19/2019 11:58 am - SSN - Add sort
            // 04/20/2019 11:14 am - SSN - [20190420-1109] - Add AsNoTracking to index pages


            //Project = await _context.Project
            //.OrderByDescending(r => r.DateModified ?? r.DateAdded)
            //    .Include(p => p.company).AsNoTracking().ToListAsync();


            headerWithSortLinks = new HeaderWithSortLinks();
            headerWithSortLinks.TestMessageForDebugging = "This is a call from project index page";
            headerWithSortLinks.AddColumns("ProjectTitle");
            headerWithSortLinks.AddColumns("Company");
            headerWithSortLinks.AddColumns("DateAdded");
            headerWithSortLinks.AddColumns("DateModified");

            headerWithSortLinks.SetupHeaders<Project>("/projects/", sortOrder, desc);

            // 08/28/2019 03:53 am - SSN - [20190828-0350] - [002] - Refactor pager
            tablePager = new TablePager();




            IQueryable<Project> _Project = _context.Project.Include(r=>r.company);

            Project = await PaginatedList<Project>.GetSourcePage(_Project, sortOrder, desc, pageIndex,20);
             
            tablePager.SetupButtons<Project>(Project, "/projects", sortOrder, desc);


        }



     
    }
}
