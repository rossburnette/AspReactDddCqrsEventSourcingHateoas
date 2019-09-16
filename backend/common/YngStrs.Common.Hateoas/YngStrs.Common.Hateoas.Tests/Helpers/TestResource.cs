using System.Collections.Generic;
using YngStrs.Common.Hateoas.Core;

namespace YngStrs.Common.Hateoas.Tests.Helpers
{
    public class TestResource : Resource
    {
        public TestResource()
        {
            
        }

        public TestResource(TestViewModel viewModel)
        {
            ValueType = viewModel.ValueType;
            ReferenceType = viewModel.ReferenceType;
            Collection = viewModel.Collection;
        }

        public int ValueType { get; set; }

        public string ReferenceType { get; set; }

        public IEnumerable<int> Collection { get; set; }
    }
}