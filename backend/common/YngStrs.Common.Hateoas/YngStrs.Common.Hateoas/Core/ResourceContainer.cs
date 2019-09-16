using System.Collections.Generic;

namespace YngStrs.Common.Hateoas.Core
{
    public class ResourceContainer<TResource> : Resource
        where TResource : Resource
    {
        public IEnumerable<TResource> Items { get; set; }
    }
}