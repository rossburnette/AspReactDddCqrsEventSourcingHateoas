FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 11542
EXPOSE 44349

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY YngStrs.Customers.Api/YngStrs.Customers.Api.csproj YngStrs.Customers.Api/
RUN dotnet restore YngStrs.Customers.Api/YngStrs.Customers.Api.csproj
COPY . .
WORKDIR /src/YngStrs.Customers.Api
RUN dotnet build YngStrs.Customers.Api.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish YngStrs.Customers.Api.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "YngStrs.Customers.Api.dll"]
