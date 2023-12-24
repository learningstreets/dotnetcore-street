using System.Collections.Generic;
using System.Transactions;
using Microsoft.AspNetCore.Mvc;
using AtoZ_mServices.Utility;
using Associates.Service;
using Microsoft.Extensions.Configuration;
using Associates.Model;

namespace Associates.Controllers
{
    [Produces("application/json")]
    [Route("v1/[controller]")]
    [ApiController]
    public class AssociatesController : ControllerBase
    {

        public readonly AssociateService _associateService = new AssociateService();
        string _connectionString = string.Empty;

        private readonly IConfiguration _configuration;

       
        public AssociatesController(IConfiguration iConfig)
        {
            _configuration = iConfig;

             _connectionString = _configuration.GetSection(GlobalData.ConfigSection).GetSection(GlobalData.ConnectionString).Value;
        }


        // Method will give all associate details 
        [HttpGet]
        public IActionResult Get()
        {
            var _result = _associateService.GetAllAssociateDetails(_connectionString);
            return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));
        }


        // Method will give authenticate associate details for login
        [Route("[action]/{ids}")]
        [HttpGet]      
        public IActionResult AuthenticateUser(string ids)
        {           
            string[] _data = ids.Split(",");
            List<AssociateViewModel> _userData = _associateService.AuthenticateUser(_data[0], _data[1], _connectionString);

            if (_userData != null) { 
            if(_userData.Count > 0)
                    return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _userData));
            }
            return new JsonResult(Utility.GetResponse(NotFound().StatusCode, GlobalData.MessageNotFound, _userData));

        }




        // Method will give specific associate details 
        [HttpGet("{id}", Name = "GetAssociateDetails")]
        public IActionResult GetAssociateDetails(string id)
        {  
            var _result = _associateService.GetAssociateDetails(id, _connectionString);
            return new JsonResult(Utility.GetResponse(Ok().StatusCode, GlobalData.MessageSuccess, _result));

        }

        // POST: api/Associates
        [HttpPost]
        public IActionResult Post([FromBody] AssociateViewModel associateViewModel)
        {
                var _result = _associateService.AddAssociateDetails(associateViewModel, _connectionString);

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
        public IActionResult Put([FromBody] AssociateViewModel associateViewModel)
        {
                var _result = _associateService.UpdateAssociateDetails(associateViewModel, _connectionString);

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
