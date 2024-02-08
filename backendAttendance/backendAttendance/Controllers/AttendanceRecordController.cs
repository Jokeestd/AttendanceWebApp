using AutoMapper;
using backendAttendance.Core.Context;
using backendAttendance.Core.Dtos.AttendanceRecord;
using backendAttendance.Core.Dtos.Employee;
using backendAttendance.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendAttendance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceRecordController : ControllerBase
    {
        private ApplicationDbContext _context { get; }

        private IMapper _mapper { get; }
        public AttendanceRecordController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //CRUD

        //Create
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateRecord([FromBody] RecordCreateDto dto)
        {
            var newRecord = _mapper.Map<AttendanceRecord>(dto);
            await _context.AttendanceRecords.AddAsync(newRecord);
            await _context.SaveChangesAsync();

            return Ok("Attendance Record Successfully Added");
        }

        // Read

        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<RecordGetDto>>> GetRecords()
        {
            var records = await _context.AttendanceRecords.Include(record => record.employee).ToListAsync();
            var convertedRecords = _mapper.Map<IEnumerable<RecordGetDto>>(records);

            return Ok(convertedRecords);
        }

        // create with document for a justification
        //[HttpPost]
        //[Route("AddFile")]
        //public async Task<IActionResult> CreateRecordFile([FromForm] RecordCreateDto dto, IFormFile pdfFile)
        //{
            
        //    //Save pdf to server
        //    //Save url into our entity
        //    var fiveMegaByte = 5 * 1024 * 1024;
        //    var pdfMimeType = "application/pdf";

        //    if(pdfFile.Length > fiveMegaByte || pdfFile.ContentType != pdfMimeType)
        //    {
        //        return BadRequest("File is not valid");
        //    }

        //    var resumeUrl = Guid.NewGuid().ToString() + ".pdf";
        //    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", "pdfs", resumeUrl);
        //    using (var stream = new FileStream(filePath, FileMode.Create))
        //    {
        //        await pdfFile.CopyToAsync(stream);
        //    }
        //    var newCandidatee = _mapper.Map<AttendanceRecord>(dto);
        //    newCandidatee.obs = resumeUrl;
        //    await _context.AttendanceRecords.AddAsync(newCandidatee);
        //    await _context.SaveChangesAsync();
        //    return Ok("Record and file saved succesfully");

        //}

        // Update

        // Delete
    }
}
