using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AspNetCore.Http.Extensions;
using FluentAssertions;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.Identity.Api.Tests.Extensions
{
    public static class HttpResponseMessageExtensions
    {
        public static async Task<TResponse> ShouldDeserializeTo<TResponse>(this HttpResponseMessage response)
        {
            if (response == null)
            {
                throw new NullReferenceException(nameof(response));
            }

            var deserialized = await response
                .Content
                .ReadAsJsonAsync<TResponse>();

            return deserialized != null ?
                deserialized :
                throw new Exception($"Expected the response to be of type {typeof(TResponse).FullName} but could not deserialize it.");
        }

        public static async Task<TResource> ShouldBeAResource<TResource>(this HttpResponseMessage response, IEnumerable<string> expectedLinks)
            where TResource : Resource
        {
            // We always expect valid resources to be returned with a success status code
            response
                .IsSuccessStatusCode
                .Should()
                .BeTrue(response.StatusCode.ToString());

            var resource = await response.ShouldDeserializeTo<TResource>();

            if (expectedLinks != null)
            {
                resource.Links.Should().ContainKeys(expectedLinks);
            }

            return resource;
        }
    }
}