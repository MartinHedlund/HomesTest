using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Serialization;

namespace webapi.Model
{
    [Table("Homes", Schema ="dbo")]
    public class Home
    {
        [Key]
        public int Id { get; set; }
        public string? Address { get; set; }

        public WaterMeter? WaterMetrId { get; set; }
    }
}
