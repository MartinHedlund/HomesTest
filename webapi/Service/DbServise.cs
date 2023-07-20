using Microsoft.EntityFrameworkCore;
using webapi.Model;

namespace webapi.Service
{
    public class DbServise : DbContext
    {
        public DbServise(DbContextOptions<DbServise> options)
        : base(options)
        { }
        public DbSet<Home> Homes { get; set; }
        public DbSet<WaterMeter> WaterMeters { get; set;}
    }
}
