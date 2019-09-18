using System;

namespace YngStrs.Common.Api.Entities
{
    public class RelationalEntity<TKey> : BaseDeletableModel<TKey>
    {
        public override bool Equals(object obj)
        {
            if (!(obj is RelationalEntity<TKey> other))
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            if (string.IsNullOrEmpty(Id.ToString()) ||
                string.IsNullOrEmpty(other.Id.ToString()))
            {
                return false;
            }                

            return Id.ToString() == other.Id.ToString() && 
                   CreatedOn == other.CreatedOn;
        }

        public static bool operator ==(RelationalEntity<TKey> a, RelationalEntity<TKey> b)
        {
            if (a is null && b is null)
            {
                return true;
            }

            if (a is null || b is null)
            {
                return false;
            }

            return a.Equals(b);
        }

        public static bool operator !=(RelationalEntity<TKey> a, RelationalEntity<TKey> b)
        {
            return !(a == b);
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}