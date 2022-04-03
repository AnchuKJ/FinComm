#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FinComm.Data;
using FinComm.Model;

namespace FinComm.Controllers
{
    public class CommunitiesController : Controller
    {
        private readonly CommunityContext _context;

        public CommunitiesController(CommunityContext context)
        {
            _context = context;            
        }

        // GET: Communities
        [HttpGet("communities")]
        public async Task<IActionResult> Index()
        {
            return new OkObjectResult(await _context.Community.ToListAsync());
        }

        // GET: Communities/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var community = await _context.Community
                .FirstOrDefaultAsync(m => m.id == id);
            if (community == null)
            {
                return NotFound();
            }

            return View(community);
        }

        [HttpPost("createcommunity")]
        public async Task<IActionResult> Create([FromBody]Community community)
        {
            if (ModelState.IsValid)
            {
                _context.Add(community);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return new OkObjectResult(community);
        }

        [HttpGet("activities")]
        public async Task<IActionResult> GetActivities()
        {
            return new OkObjectResult((await _context.ActivityData.ToListAsync()).OrderByDescending(x=>x.id));
        }

        [HttpPost("createactivity")]
        public async Task<IActionResult> CreateActivity([FromBody] ActivityData activity)
        {
            if (ModelState.IsValid)
            {
                _context.Add(activity);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return new OkObjectResult(activity);
        }

    }
}
