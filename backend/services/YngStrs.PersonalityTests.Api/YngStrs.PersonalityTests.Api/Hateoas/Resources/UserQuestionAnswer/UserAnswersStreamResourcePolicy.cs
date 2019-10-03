using RiskFirst.Hateoas;
using System;
using YngStrs.Common.Hateoas.Core;
using YngStrs.PersonalityTests.Api.Controllers;

namespace YngStrs.PersonalityTests.Api.Hateoas.Resources.UserQuestionAnswer
{
    public class UserAnswersStreamResourcePolicy : IPolicy<UserAnswersStreamResource>
    {
        public Action<LinksPolicyBuilder<UserAnswersStreamResource>> PolicyConfiguration => policy =>
        {
            policy.RequireSelfLink();
            policy.RequireRoutedLink(
                LinkNames.PersonalityTests.GetInitial,
                nameof(PersonalityTestsController.GetFullPersonalityTest));
        };
    }
}