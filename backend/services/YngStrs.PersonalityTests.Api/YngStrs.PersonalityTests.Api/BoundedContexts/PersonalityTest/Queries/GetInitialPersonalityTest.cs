using System.Collections.Generic;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries
{
    public class GetInitialPersonalityTest : IQuery<IList<InitPersonalityTestView>>
    {
    }
}