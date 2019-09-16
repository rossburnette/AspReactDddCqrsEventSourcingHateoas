using System.Collections.Generic;
using System.Linq;

namespace YngStrs.Common.Hateoas.Tests.Helpers
{
    public class TestViewModel
    {
        public TestViewModel()
        {
            ValueType = 100;
            ReferenceType = "test";
            Collection = Enumerable.Range(1, 100);
        }

        public int ValueType { get; set; }

        public string ReferenceType { get; set; }

        public IEnumerable<int> Collection { get; set; }
    }
}