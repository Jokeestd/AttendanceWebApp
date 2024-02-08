using backendAttendance.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendAttendance.Core.Context
{
    public class ApplicationDbContext : DbContext //Inherits from DbContext
    {
        //create constructor
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Area> Areas { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<AttendanceRecord> AttendanceRecords { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            //Defining relationships
            modelBuilder.Entity<Employee>()
                .HasOne(employee => employee.area)
                .WithMany(area => area.employees)
                .HasForeignKey(employee => employee.idArea);

            modelBuilder.Entity<AttendanceRecord>()
                .HasOne(attendanceRecord => attendanceRecord.employee)
                .WithMany(employee => employee.attendanceRecords)
                .HasForeignKey(attendanceRecord => attendanceRecord.idEmployee);

        }
    }
}
