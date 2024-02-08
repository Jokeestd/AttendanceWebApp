using AutoMapper;
using backendAttendance.Core.Dtos.Area;
using backendAttendance.Core.Dtos.AttendanceRecord;
using backendAttendance.Core.Dtos.Employee;
using backendAttendance.Core.Entities;

namespace backendAttendance.Core.AutoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile()
        {
            // Area
            CreateMap<AreaCreateDto, Area>();
            CreateMap<Area, AreaGetDto>();

            // Employee
            CreateMap<EmployeeCreateDto, Employee>();
            CreateMap<Employee, EmployeeGetDto>()
                .ForMember(dest => dest.areaName, opt => opt.MapFrom(src => src.area.areaName));

            // Attendance Record
            CreateMap<RecordCreateDto, AttendanceRecord>();
            CreateMap<AttendanceRecord, RecordGetDto>()
                .ForMember(dest => dest.username, opt => opt.MapFrom(src => src.employee.username));
        }
    }
}
