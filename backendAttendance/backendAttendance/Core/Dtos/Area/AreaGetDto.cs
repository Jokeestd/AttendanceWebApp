namespace backendAttendance.Core.Dtos.Area
{
    public class AreaGetDto
    {
        public long id { get; set; }
        public string areaName { get; set; }
        public DateTime createdAt { get; set; } = DateTime.Now;


        
    }
}
