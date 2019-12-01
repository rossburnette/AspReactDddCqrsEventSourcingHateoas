using Optional;
using System;
using YngStrs.Chatbot.Api.Domain.Views;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Queries
{
    public class GetUserAnswersById : IQuery<Option<UserAnswersView, Error>>
    {
        public GetUserAnswersById(Guid aggregateId)
        {
            AggregateId = aggregateId;
        }

        public Guid AggregateId { get; set; }
    }
}
