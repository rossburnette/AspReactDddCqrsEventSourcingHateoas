namespace YngStrs.Common
{
    public class ProjectLanguage : Enumeration
    {
        public ProjectLanguage(int id, string name)
            : base(id, name)
        {
        }

        public static ProjectLanguage Bulgarian = new ProjectLanguage(1, $"{nameof(Bulgarian)}");

        public static ProjectLanguage English = new ProjectLanguage(1, $"{nameof(English)}");

        public static ProjectLanguage Russian = new ProjectLanguage(1, $"{nameof(Russian)}");
    }
}