using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Scott_sFirstASP.NETWebApp.Models;

namespace Scott_sFirstASP.NETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator() //generate blank form page
        {
            return View();
        }
       
        [HttpPost("GradeCalculator")]
        public IActionResult GradeCalculator(GradeCalculatorModel model) // create the model object when posted
        {
            return View();
        }
    }
}
