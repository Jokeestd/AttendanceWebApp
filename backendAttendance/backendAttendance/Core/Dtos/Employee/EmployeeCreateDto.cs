namespace backendAttendance.Core.Dtos.Employee
{
    public class EmployeeCreateDto
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string username { get; set; }
        public string dni { get; set; }
        public string email { get; set; }
        public long idArea { get; set; }
    }
}
