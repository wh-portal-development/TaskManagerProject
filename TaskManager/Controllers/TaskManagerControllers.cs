using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
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

        [HttpGet]
        [Route("all")]
        public ActionResult GetProjectsList()
        {
            var syr =  _projectContext.GetAll();
            return Ok(syr);
            
        }
    }
}
