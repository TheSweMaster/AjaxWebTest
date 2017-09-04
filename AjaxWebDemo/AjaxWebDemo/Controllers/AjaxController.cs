using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AjaxWebDemo.Controllers
{
    public class AjaxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetSomeData()
        {
            //Here you could get some data from a database
            var data = "This is text from the MVC controller";
            return Ok(data);
        }

        [HttpGet]
        public IActionResult GetSomeDataOnInput(string input)
        {
            //Here you could get some data from a database depending on the user input
            var data = $"Your input was '{input}' and set from the MVC controller.";
            return Ok(data);
        }

    }
}