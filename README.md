# YNGSTR
Quick and easy way engage and attract young people.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

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
  
- [x] Command Query Responsibility Segregation

- [x] Functional style command/query handlers

- [x] Event-sourcing

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
### Test Suite
- [x] xUnit
- [x] Autofixture
- [x] Moq
- [x] Fluent Assertions
- [x] Arrange Act Assert Pattern
