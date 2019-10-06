using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;
using YngStrs.PersonalityTests.Api.Domain.Views.QuestionOptions;
using YngStrs.PersonalityTests.Api.Domain.Views.TestQuestions;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.QueryHandlers
{
    public class GetStructuredTestHandler : IQueryHandler<GetStructuredTest, IList<TestQuestionView>>
    {
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public GetStructuredTestHandler(IMapper mapper, IMediator mediator)
        {
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<IList<TestQuestionView>> Handle(GetStructuredTest request, CancellationToken cancellationToken)
        {
            var data = await FetchDataFromDatabaseAsync(cancellationToken);
            return StructureDataInTree(data);
        }

        private List<TestQuestionView> StructureDataInTree(
            IEnumerable<InitPersonalityTestView> testList)
        {
            var dictionary = new Dictionary<Guid, List<QuestionOptionView>>();

            foreach (var item in testList)
            {
                if (dictionary.ContainsKey(item.QuestionId))
                {
                    dictionary[item.QuestionId].Add(_mapper.Map<QuestionOptionView>(item));
                }
                else
                {
                    var questionOptions = new List<QuestionOptionView>
                    {
                        _mapper.Map<QuestionOptionView>(item)
                    };

                    dictionary.Add(item.QuestionId, questionOptions);
                }
            }

            return dictionary
                .Select(pair => new TestQuestionView(pair.Key, pair.Value))
                .ToList();
        }

        private async Task<List<InitPersonalityTestView>> FetchDataFromDatabaseAsync(
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(
                new GetInitialPersonalityTest(),
                cancellationToken);

            return result.ToList();
        }
    }
}