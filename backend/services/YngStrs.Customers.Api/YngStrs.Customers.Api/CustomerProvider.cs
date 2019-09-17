using System;
using System.Collections.Generic;
using YngStrs.Customers.Api.Domain.Entities;

namespace YngStrs.Customers.Api
{
    public class CustomerProvider
    {
        public IEnumerable<Customer> GetCustomers()
        {
            return new[]{new Customer
            {
                Id = Guid.Parse("fa506b08-0e67-41de-aa6b-50b3c7ebfd9b"),
                Name = "Jordan Jordanov"
            }};
        }
    }
}