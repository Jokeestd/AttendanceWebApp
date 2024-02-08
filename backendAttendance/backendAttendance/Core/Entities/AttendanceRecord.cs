using System.Threading.Tasks.Dataflow;

namespace backendAttendance.Core.Entities
{
    public class AttendanceRecord : BaseEntity
    {
        public DateTime time { get; set; }
        public string obs { get; set; }
        public string tipo { get; set; } //Entrada Salida

        //Relations

        public long idEmployee { get; set; }
        public Employee employee { get; set; }
    }
}
