FROM microsoft/dotnet:2.2-sdk AS config
WORKDIR /src
COPY . .

FROM microsoft/dotnet:2.2-sdk AS build

WORKDIR /src

COPY --from=config /src .

RUN ls

WORKDIR /src/YngStrs.PersonalityTests.Api/YngStrs.PersonalityTests.Api.Tests

RUN ls

CMD dotnet test YngStrs.PersonalityTests.Api.Tests.csproj -p:CollectCoverage=true -p:CoverletOutputFormat=opencover --logger:"console;verbosity=normal"