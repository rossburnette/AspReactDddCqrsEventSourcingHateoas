using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using YngStrs.Customers.Api.Domain.Entities;

namespace YngStrs.Customers.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly CustomerProvider _provider;

        public CustomersController(CustomerProvider provider)
        {
            _provider = provider;
        }

        // GET api/customers
        [HttpGet]
        public ActionResult<IEnumerable<Customer>> Get() =>
            Ok(_provider.GetCustomers());

        // GET api/customers/fa506b08-0e67-41de-aa6b-50b3c7ebfd9b
        [HttpGet("{id}")]
        public ActionResult<string> Get(Guid id) =>
            Ok(_provider.GetCustomers().First());

        // POST api/customers
        [HttpPost]
        public void Post([FromBody] string value)
        {
            throw new NotImplementedException();
        }

        // PUT api/customers/fa506b08-0e67-41de-aa6b-50b3c7ebfd9b
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/customers/fa506b08-0e67-41de-aa6b-50b3c7ebfd9b
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}