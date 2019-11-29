using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Moq;
using Xunit;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;
using YngStrs.PersonalityTests.Api.Controllers;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;
using YngStrs.PersonalityTests.Api.Tests.Customizations;

namespace YngStrs.PersonalityTests.Api.Tests.Unit.Controllers
{
    public class PersonalityTestsControllerTests
    {
        private readonly Mock<IResourceMapper> _resourceMapperMock;
        private readonly Mock<IMediator> _mediatorMock;

        private readonly PersonalityTestsController _controller;

        public PersonalityTestsControllerTests()
        {
            _resourceMapperMock = new Mock<IResourceMapper>();
            _mediatorMock = new Mock<IMediator>();
            _controller = new PersonalityTestsController(_resourceMapperMock.Object, _mediatorMock.Object);
        }

        [Theory]
        [CustomizedAutoData]
        public async Task GetStructuredPersonalityTest_Returns_200_Ok(RootTestView testData)
        {
            // Arrange
            _mediatorMock
                .Setup(mediator => mediator.Send(new GetStructuredTest(), CancellationToken.None))
                .ReturnsAsync(() => testData);

            // Act
            var result = await _controller.GetStructuredPersonalityTest();

            // Assert 
            result
                .Should()
                .NotBeNull();
        }
    }
}