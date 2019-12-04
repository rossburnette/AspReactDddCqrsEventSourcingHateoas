FROM endeveit/docker-jq AS config
WORKDIR /src
COPY . .
WORKDIR /src/Functional
RUN jq '.ConnectionStrings.DefaultConnection = "Server=relationaldb;Port=5432;Database=identity-relational;User Id=postgres;Password=postgres;"' appsettings.json > tmp.$$.json && mv tmp.$$.json appsettings.json
RUN jq '.EventStore.ConnectionString = "Server=eventstore;Port=5432;Database=identity-event-store;User Id=postgres;Password=postgres;"' appsettings.json > tmp.$$.json && mv tmp.$$.json appsettings.json
RUN cat appsettings.json

FROM microsoft/dotnet:3.0-sdk AS build

WORKDIR /src

COPY --from=config /src .

# RUN dotnet restore Cafe.sln
# RUN dotnet build Cafe.sln 

RUN ls

WORKDIR /src

RUN ls

RUN chmod +x run-tests-with-coverage-report.sh
CMD bash run-tests-with-coverage-report.sh \
    && cp coverage.* /coverage