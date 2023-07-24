using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomesController : ControllerBase
    {
        private readonly DbServise _context;

        public HomesController(DbServise context)
        {
            _context = context;
        }

        // GET: api/Homes
        [HttpGet]
        [Route("get-all")]
        public async Task<ActionResult<IEnumerable<Home>>> GetHomes()
        //public async Task<ActionResult<string>> GetHomes()
        {
          if (_context.Homes == null)
          {
              return NotFound();
          }
            try
            {
                return await _context.Homes.Include(x => x.WaterMeterId).ToListAsync(); ;

            }
            catch (Exception ex)
            {

                await Console.Out.WriteLineAsync(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        // GET: api/Homes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Home>> GetHomebyId(int id)
        {
          if (_context.Homes == null)
          {
              return NotFound();
          }
            var home = await _context.Homes.Include(x => x.WaterMeterId).FirstOrDefaultAsync();

            if (home == null)
            {
                return NotFound();
            }

            return home;
        }

        // PUT: api/Homes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHome(int id, Home home)
        {
            if (id != home.Id)
            {
                return BadRequest();
            }

            _context.Entry(home).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HomeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Homes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Home>> PostHome([FromBody] Home home)
        {
          if (_context.Homes == null)
          {
              return Problem("Entity set 'DbServise.Homes'  is null.");
          }
            _context.Homes.Add(home);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHome", new { id = home.Id }, home);
        }

        // DELETE: api/Homes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHome(int id)
        {
            if (_context.Homes == null)
            {
                return NotFound();
            }
            var home = await _context.Homes.FindAsync(id);
            if (home == null)
            {
                return NotFound();
            }

            _context.Homes.Remove(home);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HomeExists(int id)
        {
            return (_context.Homes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
