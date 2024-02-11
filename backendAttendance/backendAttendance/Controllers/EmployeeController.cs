using AutoMapper;
using backendAttendance.Core.Context;
using backendAttendance.Core.Dtos.Area;
using backendAttendance.Core.Dtos.Employee;
using backendAttendance.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendAttendance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private ApplicationDbContext _context { get; }

        private IMapper _mapper { get; }
        public EmployeeController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //CRUD

        //Create
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateEmployee([FromBody] EmployeeCreateDto dto)
        {
            var newEmployee = _mapper.Map<Employee>(dto);
            await _context.Employees.AddAsync(newEmployee);
            await _context.SaveChangesAsync();

            return Ok("Employee Successfully Created");
        }

        // Read

        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<EmployeeGetDto>>> GetEmployees()
        {
            var employees = await _context.Employees.Include(employee => employee.area).OrderByDescending(q=>q.createdAt).ToListAsync();
            var convertedEmployees = _mapper.Map<IEnumerable<EmployeeGetDto>>(employees);

            return Ok(convertedEmployees);
        }


        // Update

        // Delete
    }
}
