FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-nanoserver-1809 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-nanoserver-1809 AS build
WORKDIR /src
COPY ["YngStrs.HealthCheckUI.csproj", ""]
RUN dotnet restore "./YngStrs.HealthCheckUI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "YngStrs.HealthCheckUI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "YngStrs.HealthCheckUI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "YngStrs.HealthCheckUI.dll"]