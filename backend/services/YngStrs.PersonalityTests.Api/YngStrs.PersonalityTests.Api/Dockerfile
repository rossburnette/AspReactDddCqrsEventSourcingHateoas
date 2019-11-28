FROM endeveit/docker-jq AS config

ARG ASPNETCORE_ENVIRONMENT
ENV ASPNETCORE_ENVIRONMENT ${ASPNETCORE_ENVIRONMENT}
RUN echo $ASPNETCORE_ENVIRONMENT

EXPOSE 5101

WORKDIR /src
COPY . .
WORKDIR /src

RUN jq '.ConnectionStrings.DefaultConnection = "Server=relationaldb;Port=5432;Database=personality-tests-relational;User Id=postgres;Password=postgres;"' appsettings.json > tmp.$$.json && mv tmp.$$.json appsettings.json
RUN jq '.EventStore.ConnectionString = "Server=eventstore;Port=5432;Database=personality-tests-event-store;User Id=postgres;Password=postgres;"' appsettings.json > tmp.$$.json && mv tmp.$$.json appsettings.json
RUN cat appsettings.json

FROM microsoft/dotnet:2.2-sdk AS build

WORKDIR /src

COPY --from=config /src .

WORKDIR /src

ARG DOTNET_BUILD_CONFIGURATION
RUN dotnet publish YngStrs.PersonalityTests.Api.csproj --configuration ${DOTNET_BUILD_CONFIGURATION} --output ./artifacts

WORKDIR /src/artifacts

ARG ASPNETCORE_ENVIRONMENT
ENV ASPNETCORE_ENVIRONMENT ${ASPNETCORE_ENVIRONMENT}

ENTRYPOINT [ "dotnet", "YngStrs.PersonalityTests.Api.dll" ]