using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model
{
    public class Home
    {
        [Key]
        public int Id { get; set; }
        public string Address { get; set; }

        [ForeignKey(nameof(WaterMetrId))]
        public int WaterMetrId { get; set; }
        public WaterMeter WaterMeter { get; set; }
    }
}
