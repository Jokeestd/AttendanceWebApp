namespace backendAttendance.Core.Entities
{
    public class Area : BaseEntity
    {
        public string areaName { get; set; }
        public int officeNumber { get; set; }

        //Relations
        public ICollection<Employee> employees { get; set; }

    }
}
