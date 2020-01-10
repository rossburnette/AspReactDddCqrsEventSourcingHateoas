# YNGSTR
Quick and easy way engage and attract young people.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[![Build status](https://ci.appveyor.com/api/projects/status/ck1tf59mmq6qo6t8?svg=true)](https://ci.appveyor.com/project/profjordanov/aspreactdddcqrseventsourcinghateoas)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e70ea46c375d420684d7e4b0cf4bc51b)](https://www.codacy.com/manual/profjordanov/AspReactDddCqrsEventSourcingHateoas?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=profjordanov/AspReactDddCqrsEventSourcingHateoas&amp;utm_campaign=Badge_Grade)

>  Containers based microservices architecture application, cross-platform on Linux and Windows, powered by .NET Core 2.2, Docker engine, Domain-Driven Design, Functional Programming and TDD. 

## Features
- [x] Microservices architecture

 The backend is structured as a collection of web services that are:
  - Highly maintainable and testable
  - Loosely coupled
  - Independently deployable
  - Organized around business requirements
  
![alt text](https://raw.githubusercontent.com/profjordanov/AspReactDddCqrsEventSourcingHateoas/master/docs/architecture_overview_landscape.png)


- [x] Domain-Driven Design done by the book, demonstrated by the following concepts:
  - Bounded contexts
  - Ubiqutous language
  
- [x] Command Query Responsibility Segregation with [MediatR](https://github.com/jbogard/MediatR)

- [x] Functional style command/query handlers with [Optional](https://www.nuget.org/packages/Optional)

- [x] Event-sourcing with [Marten](https://martendb.io/)

- [x] Complete tests suite (unit and integration)

- [x] Docker CI setup with multiple data sources

- [x] REST with [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

- [x] Asynchronous communication via RabbitMQ
  
- [x] Swagger UI + Fully Documented Controllers

- [x] Thin Controllers

- [x] AutoMapper

- [x] EntityFramework Core with PostgreSQL

- [x] Stylecop

- [x] Neat folder structure

```
├───backend
│   ├───common
│   │   ├───YngStrs.Common.Api
│   │   ├───YngStrs.Common.Cqrs
│   │   ├───YngStrs.Common.EventSourcing
│   │   ├───YngStrs.Common.Hateoas
|   |   |   └───YngStrs.Common.Hateoas.Tests  
│   │   └───YngStrs.Common
│   ├───configuration
│   │   ├───analyzers.ruleset
│   │   └───stylecop.json
│   ├───services
│   │   ├───YngStrs.Chatbot.Api
|   |   |   └───YngStrs.Chatbot.Api.Tests
│   │   ├───YngStrs.Customers.Api
|   |   |   └───YngStrs.Customers.Api.Tests
│   │   ├───YngStrs.PersonalityTests.Api
|   |   |   └───YngStrs.PersonalityTests.Api.Tests
│   │   ├───YngStrs.Identity.Api
|   |   |   └───YngStrs.Identity.Api.Tests
│   │   ├───YngStrs.Downloads.Api
|   |   |   └───YngStrs.Downloads.Api.Tests
│   │   ├───YngStrs.Blog.Api
|   |   |   └───YngStrs.Blog.Api.Tests
│   │   └───YngStrs.Contents.Api
|   |       └───YngStrs.Contents.Api.Tests
│   └───workers
│       ├───YngStrs.EmailWorker.Api
|       |   └───YngStrs.EmailWorker.Api.Tests
│       └───YngStrs.ReportsWorker.Api
|           └───YngStrs.ReportsWorker.Api.Tests
└─── frontend
     └───react.app    
```

- [x] API Gateway with [Ocelot](https://ocelot.readthedocs.io/en/latest/index.html)

- [x] Health Check UI

![alt text](https://raw.githubusercontent.com/profjordanov/AspReactDddCqrsEventSourcingHateoas/master/docs/healthchecks.PNG)

### Test Suite
- [x] xUnit
- [x] Autofixture
- [x] Moq
- [x] Fluent Assertions
- [x] Arrange Act Assert Pattern
- [x] Complete integration tests suite using Kestrel & Docker

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- with Docker
TODO:
- without Docker
You'll need to have [PostgreSql](https://www.postgresql.org/download/) either installed locally or at least have some instance available to set up the connection strings.

You'll also need at version `2.2` & `3.0` of the [`.NET Core SDK`](https://dotnet.microsoft.com/download).

### Running the API

#### Using Docker

TODO

#### Using Visual Studio
1. Open all `.sln` files using Visual Studio.
2. Set up the connection strings inside `appsettings.json` files.
3. Execute `Update-Database` inside the `Package Manager Console` for each API. 
4. Run the applications.

#### Using the `dotnet` CLI

1. Open the project folder inside your favorite editor.
2. Set up the connection strings inside all `appsettings.json`.
3. Execute `dotnet ef database update` inside all APIs folders.
4. Execute `dotnet run` for all APIs.
5. Go to `http://localhost:5000`.

## Running the tests

#### Using Docker

1. Simply run `run-integration-tests.sh`.

#### Using Visual Studio or the `dotnet` CLI
1. Either run them through the `Test Explorer` in Visual Studio or using `dotnet test` for each API.
