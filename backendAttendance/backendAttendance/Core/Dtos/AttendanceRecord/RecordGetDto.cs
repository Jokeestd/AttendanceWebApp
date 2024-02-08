namespace backendAttendance.Core.Dtos.AttendanceRecord
{
    public class RecordGetDto
    {
        public long id { get; set; }
        public DateTime time { get; set; }
        public string obs { get; set; }
        public string tipo { get; set; } //Entrada Salida
        public long idEmployee { get; set; }
        public string username { get; set; }
        public DateTime createdAt { get; set; } = DateTime.Now;
    }
}
