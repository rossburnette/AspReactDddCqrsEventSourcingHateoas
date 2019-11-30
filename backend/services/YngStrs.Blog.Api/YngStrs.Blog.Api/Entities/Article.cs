using System;
using System.ComponentModel.DataAnnotations;
using YngStrs.Common.Api;

namespace YngStrs.Blog.Api.Entities
{
    public class Article
    {
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public ProjectLanguages Language { get; set; }
    }
}
