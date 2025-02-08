using DfccilRecruitmentStudentPortal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DfccilRecruitmentStudentPortal.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            //return MyProfile();
            return RedirectToAction("MyProfile", "Home");
        }
        //[AllowAnonymous]
        public IActionResult MyProfile()
        {
            return View();
        }
        public IActionResult ProfileHome2()
        {
            return View();
        }
        public IActionResult Instruction()
        {
            return MyProfile();
        }
        public IActionResult OfferLetterDetail()
        {
            return MyProfile();
        }
        public IActionResult Joinning()
        {
            return View();
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
