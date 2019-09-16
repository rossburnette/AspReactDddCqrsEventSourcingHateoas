using MediatR;

namespace YngStrs.Common.Cqrs.Core
{
    public interface IQuery<out TResponse> : IRequest<TResponse>
    {
    }
}