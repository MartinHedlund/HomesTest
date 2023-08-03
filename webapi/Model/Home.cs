using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Serialization;

namespace webapi.Model
{
    [Table("Home", Schema ="dbo")]
    public class Home
    {
        [Key]
        public int Id { get; set; }
        public string? Adress { get; set; }

        public List<WaterMeter>? WaterMeterId { get; set; }
    }
}
