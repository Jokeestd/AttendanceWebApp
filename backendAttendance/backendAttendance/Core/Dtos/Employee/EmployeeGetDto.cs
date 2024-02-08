namespace backendAttendance.Core.Dtos.Employee
{
    public class EmployeeGetDto
    {
        public long id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string username { get; set; }
        public string dni { get; set; }
        public string email { get; set; }

        public long idArea { get; set; }

        public string areaName { get; set; }
        public DateTime createdAt { get; set; } = DateTime.Now;

    }
}
