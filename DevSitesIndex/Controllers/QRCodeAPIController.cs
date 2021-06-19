using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QRCodeAPIController : Controller
    {

        [Route("get/{stringToEncode}")]
        public IActionResult getQRCode(string stringToEncode )
        {
            string stringToEncodeDecoded = WebUtility.UrlDecode(stringToEncode);
             //url = "http://p3013.nonbs.org:56581/app2/timesheet";
             //url = "http://p3013.nonbs.org:56581/Contact";

            QRCoder.QRCode_EntryPoint qrCode = new QRCoder.QRCode_EntryPoint();
            

            QRCodeHolder model = new QRCodeHolder();
            model.QRCodeContent= qrCode.RenderQrCode(stringToEncodeDecoded);
             

            return View("/views/shared/api/QRCodeView/ShowQRCode.cshtml", model);

        }
    }

    public class QRCodeHolder
    {
        public string QRCodeContent { get; set; }
    }


}