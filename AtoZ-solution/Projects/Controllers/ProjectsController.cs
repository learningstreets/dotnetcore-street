using System.Collections.Generic;
using System.Transactions;
using Microsoft.AspNetCore.Mvc;
using AtoZ_mServices.Utility;
using Projects.Service;
using Microsoft.Extensions.Configuration;
using Projects.Model;

namespace Projects.Controllers
{
    [Produces("application/json")]
    [Route("v1/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {

        public readonly ProjectService _projectService = new ProjectService();
        string _connectionString = string.Empty;

        private readonly IConfiguration _configuration;


        public ProjectsController(IConfiguration iConfig)
        {
            _configuration = iConfig;

            _connectionString = _configuration.GetSection(GlobalData.ConfigSection).GetSection(GlobalData.ConnectionString).Value;
        }


        // Method will give all Project details 
        [HttpGet]
        public IActionResult Get()
        {
            var _result = _projectService.GetAllProjectDetails(_connectionString);
            return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));
        }


        // Method will give authenticate Project details for login
        [Route("[action]/{ids}")]
        [HttpGet]
        public IActionResult AuthenticateUser(string ids)
        {
            string[] _data = ids.Split(",");
            List<ProjectViewModel> _userData = _projectService.AuthenticateUser(_data[0], _data[1], _connectionString);

            if (_userData != null)
            {
                if (_userData.Count > 0)
                    return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _userData));
            }
            return new JsonResult(Utility.GetResponse(NotFound().StatusCode, GlobalData.MessageNotFound, _userData));

        }




        // Method will give specific Project details 
        [HttpGet("{id}", Name = "GetProjectDetails")]
        public IActionResult GetProjectDetails(string id)
        {
            var _result = _projectService.GetProjectDetails(id, _connectionString);
            return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));

        }

        // POST: api/Projects
        [HttpPost]
        public IActionResult Post([FromBody] ProjectViewModel ProjectViewModel)
        {
            var _result = _projectService.AddProjectDetails(ProjectViewModel, _connectionString);

            if (_result != 0)
            {
                return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));
            }
            else
            {
                return new JsonResult(Utility.GetResponse(BadRequest().StatusCode, GlobalData.MessageBadRequest, _result));
            }
        }

        [HttpPut]
        public IActionResult Put([FromBody] ProjectViewModel ProjectViewModel)
        {
            var _result = _projectService.UpdateProjectDetails(ProjectViewModel, _connectionString);

            if (_result != 0)
            {
                return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));
            }
            else
            {
                return new JsonResult(Utility.GetResponse(BadRequest().StatusCode, GlobalData.MessageBadRequest, _result));
            }
        }

    }
}