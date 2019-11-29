using FluentAssertions;
using Xunit;
using YngStrs.Customers.Api.Controllers;

namespace YngStrs.Customers.Api.Tests.Unit.Controllers
{
    public class CustomersControllerTests
    {
        private readonly CustomerProvider _provider;

        private readonly CustomersController _controller;

        public CustomersControllerTests()
        {
            _provider = new CustomerProvider();
            _controller = new CustomersController(_provider);
        }

        [Fact]
        public void Get_Returns_200_Ok()
        {
            // Act 
            var result = _controller.Get();

            // Assert
            result
                .Value
                .Should()
                .NotBeNullOrEmpty();
        }
    }
}