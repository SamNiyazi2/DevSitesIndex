using SSN_GenUtil_StandardLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Moq;
using System.Threading;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.Routing;

// 10/25/2019 10:45 pm - SSN - [20191025-2245] - [001] - Initial tests

namespace DevSitesIndex.MSTests.Timelog
{
    [TestClass]
    public class TimelogTests
    {


        //Mock<ICreditCardApplicationRepository> mockRepository;
        //ApplyController sut;

        //public TimelogTests()
        //{
        //    mockRepository = new Mock<ICreditCardApplicationRepository>();
        //    sut = new ApplyController(mockRepository.Object);

        //}



        [TestMethod]
        public async Task TestMethod1()
        {



        // 10/26/2019 02:39 am - SSN - [20191025-2245] - [003] - Initial tests

        https://docs.microsoft.com/en-us/aspnet/core/test/razor-pages-tests?view=aspnetcore-3.0#unit-tests-of-the-page-model-methods

            //var httpContext = new DefaultHttpContext();
            //var modelState = new ModelStateDictionary();
            //var actionContext = new ActionContext(httpContext, new RouteData(), new PageActionDescriptor(), modelState);
            //var modelMetadataProvider = new EmptyModelMetadataProvider();
            //var viewData = new ViewDataDictionary(modelMetadataProvider, modelState);
            //var tempData = new TempDataDictionary(httpContext, Mock.Of<ITempDataProvider>());
            //var pageContext = new PageContext(actionContext)
            //{
            //    ViewData = viewData
            //};












            IConfigurationRoot configuration = TestUtil.GetConfiguration();

            ILogger_SSN logger = new SSN_Logger();


            DbContextOptions<DevSitesIndexContext> options = new DbContextOptions<DevSitesIndexContext>();
            // DevSitesIndexContext context = new DevSitesIndexContext(options, configuration, logger);
            Mock<DevSitesIndexContext> mockDBContext = new Mock<DevSitesIndexContext>(options, configuration, logger);

            Mock<DbSet<TimeLog>> mockDbSet = new Mock<DbSet<TimeLog>>();



            // createModel.TimeLog = new TimeLog();

            TimeLog timelog = new TimeLog();
            timelog.JobId = 1005;
            timelog.DisciplineID = 1;
            timelog.WorkDetail = "Test from test-101";




            //Pages.TimeLogs.CreateModel createModel = new Pages.TimeLogs.CreateModel(mockDBContext.Object, logger)
            //{
            //    PageContext = pageContext,
            //    TempData = tempData,
            //    TimeLog = timelog,
            //    Url = new UrlHelper(actionContext)
            //};

            Pages.TimeLogs.CreateModel createModel = new Pages.TimeLogs.CreateModel(mockDBContext.Object, logger);
            createModel.TimeLog = timelog;


            //
            //   createModel.TryValidateModel(timelog,"TimeLog");


            IActionResult results = await createModel.OnPostAsync();

            CancellationToken ct = new CancellationTokenSource().Token;

            mockDBContext.Verify(x => x.Add(mockDbSet.Object), Times.Once);

            //mockDBContext.Verify(x => x.SaveChangesAsync(ct), Times.Once,"Failed to call SaveChangesAsync [20191026-0019]");
            mockDBContext.Verify(x => x.SaveChangesAsync(ct), Times.Once);
        }






        [TestMethod]
        public async Task TestMethod2()
        {

            IConfigurationRoot configuration = TestUtil.GetConfiguration();

            ILogger_SSN logger = new SSN_Logger();

            using (var db = new DevSitesIndexContext(TestUtil.TestDbContextOptions(), configuration, logger))
            {


                Pages.TimeLogs.CreateModel createModel = new Pages.TimeLogs.CreateModel(db, logger);
                createModel.TimeLog = new TimeLog();

                createModel.TimeLog.JobId = 1005;
                createModel.TimeLog.DisciplineID = 1;
                createModel.TimeLog.WorkDetail = "Test from test-101";

                IActionResult results = await createModel.OnPostAsync();

                CancellationToken ct = new CancellationTokenSource().Token;

            }

        }


    }



    class TestUtil
    {




        // 10/26/2019 01:03 am - SSN - [20191025-2245] - [002] - Initial tests
        // https://docs.microsoft.com/en-us/aspnet/core/test/razor-pages-tests?view=aspnetcore-3.0#unit-tests-of-the-data-access-layer-dal

        public static DbContextOptions<DevSitesIndexContext> TestDbContextOptions()
        {
            // Create a new service provider to create a new in-memory database.
            var serviceProvider = new ServiceCollection()
                .AddEntityFrameworkInMemoryDatabase()
                .BuildServiceProvider();

            // Create a new options instance using an in-memory database and 
            // IServiceProvider that the context should resolve all of its 
            // services from.
            var builder = new DbContextOptionsBuilder<DevSitesIndexContext>()
                .UseInMemoryDatabase("InMemoryDb")
                .UseInternalServiceProvider(serviceProvider);

            return builder.Options;
        }




        public static IConfigurationRoot GetConfiguration()
        {
            var myConfiguration = new Dictionary<string, string>
                        {
                            {"Key1", "Value1"},
                            {"Nested:Key1", "NestedValue1"},
                            {"Nested:Key2", "NestedValue2"}
                        };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(myConfiguration)
                .Build();
            return configuration;
        }


    }

}
