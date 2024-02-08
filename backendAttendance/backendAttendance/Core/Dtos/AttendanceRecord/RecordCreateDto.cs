namespace backendAttendance.Core.Dtos.AttendanceRecord
{
    public class RecordCreateDto
    {
        public DateTime time { get; set; }
        public string obs { get; set; }
        public string tipo { get; set; } //Entrada o Salida
        public long idEmployee { get; set; }
    }
}
