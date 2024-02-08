namespace backendAttendance.Core.Entities
{
    public class Employee:BaseEntity
    {
        public string firstName{ get; set; }
        public string lastName { get; set; }
        public string username { get; set; }
        public string dni { get; set; }
        public string email { get; set; }

        //Relations with Area
        public long idArea { get; set; }

        public Area area { get; set; }

        //Relation with Attendance
        public ICollection<AttendanceRecord> attendanceRecords { get; set; }

    }
}
