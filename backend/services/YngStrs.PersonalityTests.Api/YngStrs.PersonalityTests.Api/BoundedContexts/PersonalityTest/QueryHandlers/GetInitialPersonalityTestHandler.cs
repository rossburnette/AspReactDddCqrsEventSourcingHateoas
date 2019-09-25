using System;
using System.Collections.Generic;
using System.Data;
using System.Threading;
using System.Threading.Tasks;
using YngStrs.Common.Api.DatabaseConnectors;
using YngStrs.Common.Cqrs.Core;
using YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.Queries;
using YngStrs.PersonalityTests.Api.Domain.SQL;
using YngStrs.PersonalityTests.Api.Domain.Views.PersonalityTests;

namespace YngStrs.PersonalityTests.Api.BoundedContexts.PersonalityTest.QueryHandlers
{
    public class GetInitialPersonalityTestHandler :
        IQueryHandler<GetInitialPersonalityTest, IList<InitPersonalityTestView>>
    {
        private readonly IQueryDbConnector _queryDbConnector;

        public GetInitialPersonalityTestHandler(IQueryDbConnector queryDbConnector)
        {
            _queryDbConnector = queryDbConnector;
        }

        public async Task<IList<InitPersonalityTestView>> Handle(
            GetInitialPersonalityTest request,
            CancellationToken cancellationToken)
        {
            var result = await _queryDbConnector.FetchAsync<List<InitPersonalityTestView>>(
                sql: PersonalityTestSqlQueries.InitialTest,
                mapping: (reader, list) => list.Add(ParseReaderResult(reader)),
                cancellationToken: cancellationToken);

            return result;
        }

        private static InitPersonalityTestView ParseReaderResult(IDataRecord reader) =>
            new InitPersonalityTestView
            {
                QuestionId = reader.GetGuid(reader.GetOrdinal("question_id")),
                QuestionNumber = reader.GetInt32(reader.GetOrdinal("question_number")),
                OptionId = reader.GetGuid(reader.GetOrdinal("option_id")),
                OptionDescription = reader["option_description"].ToString(),
                IsTextOnly = reader.GetBoolean(reader.GetOrdinal("is_text_only")),
                Base64Image = reader.IsDBNull(reader.GetOrdinal("image_data")) ?
                    null :
                    Convert.ToBase64String((byte[])reader[reader.GetOrdinal("image_data")])
            };
    }
}