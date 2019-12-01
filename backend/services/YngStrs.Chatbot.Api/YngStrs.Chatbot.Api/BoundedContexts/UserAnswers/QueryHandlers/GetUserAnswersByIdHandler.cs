using AutoMapper;
using MediatR;
using Optional;
using Optional.Async.Extensions;
using System;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.Queries;
using YngStrs.Chatbot.Api.Domain.Repositories;
using YngStrs.Chatbot.Api.Domain.Views;
using YngStrs.Common;
using YngStrs.Common.Cqrs.Core;

namespace YngStrs.Chatbot.Api.BoundedContexts.UserAnswers.QueryHandlers
{
    public class GetUserAnswersByIdHandler
        : IQueryHandler<GetUserAnswersById, Option<UserAnswersView, Error>>
    {
        private readonly IMapper _mapper;
        private readonly IUserAnswersRepository _repository;

        public GetUserAnswersByIdHandler(IUserAnswersRepository repository)
        {
            _repository = repository;
        }

        public Task<Option<UserAnswersView, Error>> Handle(
            GetUserAnswersById request,
            CancellationToken cancellationToken) =>
            _repository.GetByRegistratedIdAsync(request.AggregateId)
            .SomeNotNullAsync(Error.NotFound($"Could not find record with ID: {request.AggregateId}."))
            .MapAsync(async aggregate =>
            {
                return _mapper.Map<Domain.Entities.UserAnswers, UserAnswersView>(aggregate);
            });
    }
}
