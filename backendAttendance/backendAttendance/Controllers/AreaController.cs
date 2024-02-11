using AutoMapper;
using backendAttendance.Core.Context;
using backendAttendance.Core.Dtos.Area;
using backendAttendance.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendAttendance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaController : ControllerBase
    {
        private ApplicationDbContext _context { get; }

        private IMapper _mapper { get; }
        public AreaController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //CRUD

        // create
        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateArea([FromBody] AreaCreateDto dto)
        {
            Area newArea = _mapper.Map<Area>(dto);
            await _context.Areas.AddAsync(newArea);
            await _context.SaveChangesAsync();

            return Ok("Area successfully created");

        }

        // read
        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<AreaGetDto>>> GetAreas()
        {
            var areas = await _context.Areas.OrderByDescending(a => a.createdAt).ToListAsync();
            var convertedAreas = _mapper.Map<IEnumerable<AreaGetDto>>(areas);

            return Ok(convertedAreas);
        }

        // update
        
        // delete
        
    }
}
