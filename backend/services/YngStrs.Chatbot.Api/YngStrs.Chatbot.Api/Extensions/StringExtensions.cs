﻿using System;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace YngStrs.Chatbot.Api.Extensions
{
    internal static class StringExtensions
    {
        internal static string GetStringBetween(this string input, string startString, string endString, int startFrom = 0)
        {
            input = input.Substring(startFrom);
            if (!input.Contains(startString) || !input.Contains(endString))
            {
                return string.Empty;
            }

            var startPosition = input.IndexOf(startString, StringComparison.Ordinal) + startString.Length;
            if (startPosition == -1)
            {
                return string.Empty;
            }

            var endPosition = input.IndexOf(endString, startPosition, StringComparison.Ordinal);
            if (endPosition == -1)
            {
                return string.Empty;
            }

            return input.Substring(startPosition, endPosition - startPosition);
        }

        internal static string CapitalizeFirstLetter(this string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return input;
            }

            return input.Substring(0, 1).ToUpper(CultureInfo.CurrentCulture) + input.Substring(1);
        }

        internal static string ConvertCyrillicToLatinLetters(this string input)
        {
            var bulgarianLetters = new[]
                                       {
                                           "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п",
                                           "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я"
                                       };
            var latinRepresentationsOfBulgarianLetters = new[]
                                                             {
                                                                 "a", "b", "v", "g", "d", "e", "j", "z", "i", "y", "k",
                                                                 "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h",
                                                                 "c", "ch", "sh", "sht", "u", "i", "yu", "ya"
                                                             };
            for (var i = 0; i < bulgarianLetters.Length; i++)
            {
                input = input.Replace(bulgarianLetters[i], latinRepresentationsOfBulgarianLetters[i]);
                input = input.Replace(bulgarianLetters[i].ToUpper(), latinRepresentationsOfBulgarianLetters[i].CapitalizeFirstLetter());
            }

            return input;
        }

        internal static string ConvertLatinToCyrillicKeyboard(this string input)
        {
            var latinLetters = new[]
                                   {
                                       "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                                       "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
                                   };

            var bulgarianRepresentationOfLatinKeyboard = new[]
                                                             {
                                                                 "а", "б", "ц", "д", "е", "ф", "г", "х", "и", "й", "к",
                                                                 "л", "м", "н", "о", "п", "я", "р", "с", "т", "у", "ж",
                                                                 "в", "ь", "ъ", "з"
                                                             };

            for (var i = 0; i < latinLetters.Length; i++)
            {
                input = input.Replace(latinLetters[i], bulgarianRepresentationOfLatinKeyboard[i]);
                input = input.Replace(latinLetters[i].ToUpper(), bulgarianRepresentationOfLatinKeyboard[i].ToUpper());
            }

            return input;
        }

        internal static string ToValidUsername(this string input)
        {
            input = input.ConvertCyrillicToLatinLetters();
            return Regex.Replace(input, @"[^a-zA-z0-9_\.]+", string.Empty);
        }

        internal static string ToValidLatinFileName(this string input)
        {
            input = input.Replace(" ", "-").ConvertCyrillicToLatinLetters();
            return Regex.Replace(input, @"[^a-zA-z0-9_\.\-]+", string.Empty);
        }

        internal static string GetFirstCharacters(this string input, int charsCount) =>
            input.Substring(0, Math.Min(input.Length, charsCount));

        internal static bool ToBoolean(this string input)
        {
            var stringTrueValues = new[] { "true", "ok", "yes", "1", "да" };
            return stringTrueValues.Contains(input.ToLower());
        }

        internal static short ToShort(this string input)
        {
            short.TryParse(input, out var shortValue);
            return shortValue;
        }

        internal static int ToInteger(this string input)
        {
            int.TryParse(input, out var integerValue);
            return integerValue;
        }

        internal static long ToLong(this string input)
        {
            long.TryParse(input, out var longValue);
            return longValue;
        }

        internal static DateTime ToDateTime(this string input)
        {
            DateTime.TryParse(input, out var dateTimeValue);
            return dateTimeValue;
        }

        internal static string ToMd5Hash(this string input)
        {
            var md5Hash = MD5.Create();

            // Convert the input string to a byte array and compute the hash.
            var data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));

            // Create a new StringBuilder to collect the bytes
            // and create a string.
            var builder = new StringBuilder();

            // Loop through each byte of the hashed data
            // and format each one as a hexadecimal string.
            foreach (var @byte in data)
            {
                builder.Append(@byte.ToString("x2"));
            }

            // Return the hexadecimal string.
            return builder.ToString();
        }

        internal static string GetFileExtension(this string fileName)
        {
            if (string.IsNullOrWhiteSpace(fileName))
            {
                return string.Empty;
            }

            var fileParts = fileName.Split(new[] { "." }, StringSplitOptions.None);
            if (fileParts.Length == 1 || string.IsNullOrEmpty(fileParts.Last()))
            {
                return string.Empty;
            }

            return fileParts.Last().Trim().ToLower();
        }

        internal static byte[] ToByteArray(this string input)
        {
            var bytesArray = new byte[input.Length * sizeof(char)];
            Buffer.BlockCopy(input.ToCharArray(), 0, bytesArray, 0, bytesArray.Length);
            return bytesArray;
        }

        internal static string ToKendoSafeString(this string input) =>
            input.Replace(@"#", @"\\#");

        internal static string StripHtmlTags(this string inputString) =>
            Regex.Replace(inputString, "<.*?>", string.Empty);

        internal static string UrlDecode(this string input) =>
            Uri.UnescapeDataString(input);

        internal static string UrlEncode(this string input) =>
            Uri.EscapeDataString(input);

        internal static string ToUrl(this string uglyString)
        {
            var resultString = new StringBuilder(uglyString.Length);
            var isLastCharacterDash = false;

            uglyString = uglyString.Replace("C#", "CSharp");
            uglyString = uglyString.Replace("C++", "CPlusPlus");

            foreach (var character in uglyString)
            {
                if (char.IsLetterOrDigit(character))
                {
                    resultString.Append(character);
                    isLastCharacterDash = false;
                }
                else if (!isLastCharacterDash)
                {
                    resultString.Append('-');
                    isLastCharacterDash = true;
                }
            }

            return resultString.ToString().Trim('-');
        }

        internal static string MaxLengthWithEllipsis(this string stringToTrim, int maxLength)
        {
            if (stringToTrim == null || stringToTrim.Length <= maxLength)
            {
                return stringToTrim;
            }

            return stringToTrim.Substring(0, maxLength) + "...";
        }
    }
}