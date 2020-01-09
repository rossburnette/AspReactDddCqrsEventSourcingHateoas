using System;
using System.Text.RegularExpressions;

namespace YngStrs.HealthCheckUI.Helpers
{
    public class UrlHelper
    {
        public static string Combine(params string[] parts)
        {
            if (parts == null)
                return null;

            var str = "";
            var flag1 = false;
            var flag2 = false;
            foreach (var part in parts)
            {
                if (string.IsNullOrEmpty(part))
                {
                    continue;
                }

                str = str.EndsWith("?") || part.StartsWith("?") ?
                    CombineEnsureSingleSeparator(str, part, '?') :
                    str.EndsWith("#") || part.StartsWith("#") ? CombineEnsureSingleSeparator(str, part, '#')
                        : !flag2 ? !flag1 ? CombineEnsureSingleSeparator(str, part, '/')
                            : CombineEnsureSingleSeparator(str, part, '&') : str + part;
                if (part.Contains("#"))
                {
                    flag1 = false;
                    flag2 = true;
                }
                else if (!flag2 && part.Contains("?"))
                    flag1 = true;
            }
            return EncodeIllegalCharacters(str);
        }

        private static string CombineEnsureSingleSeparator(string a, string b, char separator)
        {
            if (string.IsNullOrEmpty(a))
                return b;
            if (string.IsNullOrEmpty(b))
                return a;
            return a.TrimEnd(separator) + separator + b.TrimStart(separator);
        }

        private static string EncodeIllegalCharacters(string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;
            return !s.Contains("%") ?
                Uri.EscapeUriString(s) :
                Regex.Replace(s, "(.*?)((%[0-9A-Fa-f]{2})|$)",
                    c => Uri.EscapeUriString(c.Groups[1].Value) + c.Groups[2].Value);
        }
    }
}