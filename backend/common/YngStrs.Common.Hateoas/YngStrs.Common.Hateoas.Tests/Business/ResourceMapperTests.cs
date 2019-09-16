using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Options;
using Moq;
using RiskFirst.Hateoas;
using RiskFirst.Hateoas.Implementation;
using Xunit;
using YngStrs.Common.Hateoas.Business;
using YngStrs.Common.Hateoas.Tests.Helpers;

namespace YngStrs.Common.Hateoas.Tests.Business
{
    /// <summary>
    /// Pretty silly tests ... fundamental refactoring in the future! 
    /// </summary>
    public class ResourceMapperTests
    {
        private readonly Mock<IMapper> _mapperMock;
        private readonly Mock<ILinksService> _linksServiceMock;

        private readonly ResourceMapper _resourceMapper;

        public ResourceMapperTests()
        {
            _linksServiceMock = new Mock<ILinksService>();
            _mapperMock = new Mock<IMapper>();

            _resourceMapper = new ResourceMapper(_mapperMock.Object, _linksServiceMock.Object);
        }

        [Fact]
        public async Task MapAsync_Should_Work_Properly()
        {
            // Arrange
            var viewModel = new TestViewModel();
            var resource = new TestResource(viewModel);
            MockMapper(viewModel, resource);

            _linksServiceMock
                .Setup(service => service.AddLinksAsync(resource))
                .Returns(Task.CompletedTask);

            // Act
            var result = await _resourceMapper.MapAsync<TestViewModel, TestResource>(viewModel);
        }

        [Fact]
        public async Task MapAsync_Should_Throw_Exception_If_Link_Policies_Did_Not_Configured_Properly()
        {
            // Arrange
            var viewModel = new TestViewModel();
            var resource = new TestResource(viewModel);
            MockMapper(viewModel, resource);

            _linksServiceMock
                .Setup(service => service.AddLinksAsync(resource))
                .ThrowsAsync(new InvalidOperationException("Link policies contain unexpected routes."));

            // Act
            await Assert.ThrowsAsync<InvalidOperationException>(
                () => _resourceMapper.MapAsync<TestViewModel, TestResource>(viewModel));
        }

        [Fact]
        public async Task CreateEmptyResourceAsync_Should_Work_Properly()
        {
            // Arrange
            var viewModel = new TestViewModel();
            var resource = new TestResource(viewModel);
            MockMapper(viewModel, resource);

            _linksServiceMock
                .Setup(service => service.AddLinksAsync(resource))
                .Returns(Task.CompletedTask);

            // Act
            var result = await _resourceMapper.CreateEmptyResourceAsync<TestResource>();
        }

        private void MockMapper<T, TExpected>(T model, TExpected expected) =>
            _mapperMock.Setup(mapper => mapper.Map<TExpected>(model)).Returns(expected);

    }
}