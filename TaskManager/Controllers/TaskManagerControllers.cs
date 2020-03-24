using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TaskManager.Controllers
{
    [ApiController]
    [Route("projects")]
    public class TaskManagerController : ControllerBase
    {

        private readonly ILogger<TaskManagerController> _logger;

        private readonly Interfaces.IProjectContext _projectContext;

        public TaskManagerController(ILogger<TaskManagerController> logger, Interfaces.IProjectContext projectContext)
        {
            _logger = logger;
            _projectContext = projectContext;
        }

        /*
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
        */
        [HttpGet]
        [Route("all")]
        public ActionResult GetProjectsList()
        {
            //var syr = Json _projectContext.GetAll();
            return Ok(_projectContext.GetAll());
            
        }
    }
}
