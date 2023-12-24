using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AtoZ_mServices.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class AtoZmServicesController : ControllerBase
    {
        // GET: api/AtoZmServices
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "AtoZ_mServices", "value2" };
        }

        // GET: api/AtoZmServices/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "AtoZ_mServices";
        }

        // POST: api/AtoZmServices
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/AtoZmServices/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
