using System.Collections.Generic;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.Domain.Views.TestQuestions;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries
{
    public class GetStructuredTest : IQuery<IList<TestQuestionView>>
    {
    }
}