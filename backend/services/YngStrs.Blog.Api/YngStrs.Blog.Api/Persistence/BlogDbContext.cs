using Microsoft.EntityFrameworkCore;
using YngStrs.Blog.Api.Entities;

namespace YngStrs.Blog.Api.Persistence
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        {
        }

        public DbSet<Article> Articles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Article>()
                .Property(a => a.Id)
                .ValueGeneratedOnAdd();

            modelBuilder
                .Entity<Article>()
                .ToTable("articles");

            modelBuilder
                .Entity<Article>()
                .Property(a => a.Id)
                .HasColumnName("id");

            modelBuilder
               .Entity<Article>()
               .Property(a => a.Title)
               .HasColumnName("title");

            modelBuilder
               .Entity<Article>()
               .Property(a => a.Content)
               .HasColumnName("content");
        }
    }
}
