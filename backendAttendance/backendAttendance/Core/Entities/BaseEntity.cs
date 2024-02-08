using System.ComponentModel.DataAnnotations;

namespace backendAttendance.Core.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        public long id { get; set; }
        public DateTime createdAt { get; set; } = DateTime.Now;

        public DateTime updatedAt { get; set; } = DateTime.Now;


    }
}
